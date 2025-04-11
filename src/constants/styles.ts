export const customStylesSearch = {
    background: "#fff",
    p: 2,
    borderRadius: 3,
    boxShadow: 1,
    width: 650,
    maxWidth: 650,
    mx: "auto",
    //for scrollbar
    maxHeight: 500,
    overflowY: "auto",
    mt: 2,
    pr: 1,
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
        width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ccc",
        borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#f0f0f0",
    },

};



export const customStylesSearchInput = (error: boolean) => ({
    mb: 2,
    backgroundColor: "#F2F4F8",
    borderRadius: 2,
    "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        "& fieldset": {
            borderColor: error ? "#ED2E7E" : "#F2F4F8",
        },
        "&:hover fieldset": {
            borderColor: error ? "#ED2E7E" : "#ccc",
        },
        "&.Mui-focused fieldset": {
            borderColor: error ? "#ED2E7E" : "#6833FF",
        },
    },
    "& input": {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
});

export const customStylesTagButton = (active: boolean) => ({
    borderRadius: "12px",
    px: 1.7,
    fontWeight: 500,
    textTransform: "capitalize",
    backgroundColor: active ? "#6833FF" : "#F2F4F8",
    color: active ? "#fff" : "#000",
    border: "none",
    "& .MuiChip-icon": {
        color: active ? "#fff" : "#6833FF",
    },
    "&:hover": {
        backgroundColor: active ? "#5a2edc" : "#e0e0e0",
    },
});

export const customStylesTagAvtar = {
    width: 20,
    height: 20,
    "& img": {
        objectFit: "contain",
    },
}

export const customStylesCircularProgress = {
    width: 500,
    height: 370,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mx: "auto",
    my: 2,
    // Color: "#6833FF"
}

export const customStylesErrorAvtar = {
    width: 500,
    height: 370,
    "& img": {
        objectFit: "contain",
    },
    margin: "auto",
}

export const customStylesErrorText = {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 16,
    textAlign: "left",
    color: "#ED2E7E",
}

export const customStylesCard = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 2,
    position: "relative",
    borderRadius: 2,
    border: "1px solid #F2F4F8",
    boxShadow: 0,
    backgroundColor: "#F7F8FC",
    marginTop: 5,
    fontFamily: "Poppins",
}

export const customStylesCardChip = {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#CDB4FF",
    color: "#5A31F4",
    fontSize: "0.7rem",
    fontWeight: 400,
}

export const customStylesCardContentTitle = {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 16,
    textAlign: "left",
}

export const customStylesCardContentDesc = {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 14,
    textAlign: "left",
}