import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchInput from "../../components/InputField/SearchInput";
import CardItem from "../../components/CardItem/CardItem";
import TagButton from "../../components/Button/TagButton";
import ButtonIcon from "../../assets/images/button.png";
import WhiteIcon from "../../assets/images/whiteIcon.png";
import TypeScriptIcon from "../../assets/images/TypeScript.png";
import { customStylesSearch } from "../../constants/styles";
import { tags } from "../../constants/tags";
import { ResultType } from "../../types/searchTypes";
import Loading from "../../components/Loading/Loading";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import { useLanguageData } from "../../hooks/fetchLanguageData";

const SearchPage = () => {
  const [activeTag, setActiveTag] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ResultType[]>([]);
  const { fetchLanguageData, loading, error } = useLanguageData();

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setActiveTag("");
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchLanguageData(search).then(setResults);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [search, fetchLanguageData]);

  const handleTagClick = async (tag: string) => {
    setActiveTag(tag);
    setSearch(tag);
    const data = await fetchLanguageData(tag);
    setResults(data);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Box sx={customStylesSearch}>
      <SearchInput
        value={search}
        error={error}
        onChange={(e: any) => handleSearch(e.target.value)}
      />
      <Stack direction="row" spacing={1} flexWrap="wrap" mt={2} mb={3}>
        {tags.map((tag) => (
          <TagButton
            key={tag}
            icon={ButtonIcon}
            WhiteIcon={WhiteIcon}
            label={tag}
            active={activeTag === tag}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </Stack>
      {loading && <Loading />}
      {error && <ErrorPage />}
      {results.length > 0
        ? results.map((item: any, index: number) => (
            <CardItem
              key={index}
              image={item.image || TypeScriptIcon}
              title={item.title}
              url={item.url}
              description={item.description}
            />
          ))
        : !loading && search && <DataNotFound />}
      {results.length > 0 && (
        <Typography
          variant="subtitle1"
          sx={{ color: "#999FAA", textAlign: "start" }}
        >
          {results.length} result
        </Typography>
      )}
    </Box>
  );
};

export default SearchPage;
