import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton, ListSubheader } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { FixedSizeList } from "react-window";
import MediaCard from "../MediaCard/MediaCard.js";

const NewsList = ({ newsListData, setNewsListData }) => {
  // function that is executed for all rows of the lists
  const renderRow = ({ index, style }) => {
    // index is the current row number
    // style is for inline styling of the row elements of the list
    return (
      <ListItem key={index} style={style} component="div">
        <MediaCard newsData={newsListData[index]} />
      </ListItem>
    );
  };

  // function to close the list
  const closeList = () => {
    // sets the newsListData array to empty
    setNewsListData([]);
  };

  return (
    <>
      <ListSubheader component="div" style={{ marginLeft: "4%" }}>
        <IconButton onClick={closeList}>
          <CancelIcon />
        </IconButton>
      </ListSubheader>
      <FixedSizeList
        height={400}
        width={400}
        itemSize={375}
        itemCount={newsListData.length}
      >
        {renderRow}
      </FixedSizeList>
    </>
  );
};

export default NewsList;
