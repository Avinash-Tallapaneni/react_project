import {
  Box,
  Container,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import appTheme from "./Theme.jsx";

function App() {
  const [prompt, setPrompt] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState(
    "Content will be shown here"
  );

  const OPENAIURL = "https://api.openai.com/v1/chat/completions";

  const handleSubmit = async () => {
    var bearer = "Bearer " + import.meta.env.VITE_OPENAI_API_KEY;

    fetch(OPENAIURL, {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 50,
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setChatGPTResponse(data.choices[0].message.content);
      })
      .catch((error) => {
        console.log("Something bad happened " + error);
      });
  };

  return (
    <Container
      sx={{
        height: "100vh",
        color: "primary.main",
        paddingY: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "1rem",
      }}
      maxWidth="lg"
    >
      <Box sx={{ textAlign: "center", fontSize: "2rem" }}>
        Chat completion using OpenAI API.
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          outline: `1px solid ${appTheme.palette.primary.main}`,
          borderRadius: "0.25rem",
        }}
      >
        <TextField
          id="outlined-basic"
          // variant="outlined"
          placeholder="Search"
          onChange={(e) => setPrompt(e.target.value)}
          sx={{
            "& input": {
              color: `${appTheme.palette.primary.main}`,
              "&:focus": {
                outline: "none",
                border: "none",
              },
            },
          }}
          fullWidth
        />
        <SearchIcon onClick={handleSubmit} sx={{ cursor: "pointer" }} />
      </Box>

      <Typography
        sx={{
          textTransform: "capitalize",
          color: appTheme.palette.primary.main,
          outline: `1px solid ${appTheme.palette.primary.main}`,
          fontSize: "1rem",
          padding: "0.5rem",
          borderRadius: "0.25rem",
          minHeight: "20rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {chatGPTResponse}
      </Typography>
    </Container>
  );
}

export default App;
