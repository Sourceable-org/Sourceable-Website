import { Alert } from '@mui/material';

const AlertPopup = (text, type) => {
  if (text && type) {
    return (
      <Alert
        severity={type}
        sx={{
          position: 'absolute',
          zIndex: 10,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;