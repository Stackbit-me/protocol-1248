import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import wordList from "../src/assets/wordList";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  digit1Container: {
    display: "flex",
  },
  digit1IndexWord: {
    width: 20,
    color: "#fff",
    fontSize: 12,
    backgroundColor: "#606060",
    textAlign: "center",
    fontWeight: "400",
  },
  digit1FirstColumn: {
    width: 20,
    height: 34.5,
    lineHeight: 1.4,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  selected: {
    backgroundColor: "red",
    borderRadius: "10px 10px",
  },
  numberContainer: {
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
      zIndex: 9999,
      overflow: "visible",
      backgroundColor: "#212121",
      boxShadow: "2px 2px 10px rgb(0 0 0 / 80%)",
    },
  },
  wallet: {
    margin: "100px auto",
    height: 207,
    width: 320,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    background: "#3e3e3e",
    borderRadius: 11,
    overflow: "hidden",
    boxShadow: "2px 2px 10px rgb(0 0 0 / 80%)",
    transform: "scale(1.2)",
    transition: "100ms all",
    "&:hover": {
      overflow: "visible",
      borderRadius: 11,
    },
  },
  walletContainer: {
    width: 840,
    display: "flex",
    justifyContent: "space-evenly",
  },
  wordListItem: {},
  listWordContainer: {
    textAlign: "left",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  textareaClass: {
    margin: "20px auto 0px",
    width: "500px !important",
    height: "150px !important",
    fontSize: "20px !important",
    padding: "10px 20px !important",
    borderRadius: "10px !important",
    boxShadow: "2px 2px 10px rgb(0 0 0 / 80%)",
  },
  listWordColumn: {
    fontSize: 20,
    padding: "30px",
  },
  wordIndex: {
    color: "#b6b6b6",
  },
  buttonContainer: {
    margin: "20px auto 0px",
  },
  button: {
    margin: "0px 5px",
    width: 175,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    // textTransform: "uppercase",
    color: "#6b6a6a",
  },
  subtitle2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const [words, setWords] = useState(
    "scene cage sign reject install future strike glue gentle weird wave rail client someone maze scene cage sign reject install future strike install zoo"
  );
  const [wordIds, setWordIds] = useState([]);

  const handleClean = () => {
    setWords("");
  };

  const handleGenerateRandom = () => {
    let newWords = "";
    for (let index = 0; index <= 23; index++) {
      const indexRandom = Math.floor(Math.random() * (2048 - 1) + 1);
      newWords += `${wordList[indexRandom]}`;
      if (index < 23) {
        newWords += " ";
      }
    }
    setWords(newWords);
  };

  const getWordId = (word: string): number => {
    let wordId = -1;
    wordList.map((wordValue, index) => {
      if (word === wordValue) {
        wordId = index;
      }
    });
    return wordId;
  };

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  const listWord = (wordIndex: number, index: number) => {
    const normalizeWordIndex = zeroPad(wordIndex + 1, 4);
    const normalizeIndex = zeroPad(index + 1, 2);
    return (
      <Box key={`word${index}`} className={classes.wordListItem}>
        <span className={classes.wordIndex}>[{normalizeIndex}]</span>{" "}
        {normalizeWordIndex} : {wordList[wordIndex]}
        <br />
      </Box>
    );
  };

  const getTemplateDigits = (
    digitNumber: number,
    digit: number,
    index: number
  ) => {
    switch (digit) {
      case 1:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 4:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span className={classes.selected}>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span className={classes.selected}>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 6:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span className={classes.selected}>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
      case 7:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span className={classes.selected}>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>2</span>
              <span>8</span>
            </Box>
          </Box>
        );

      case 8:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span className={classes.selected}>8</span>
            </Box>
          </Box>
        );
      case 9:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span className={classes.selected}>8</span>
            </Box>
          </Box>
        );
      default:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span>4</span>
            </Box>
            <Box className={classes.digit1FirstColumn}>
              <span>2</span>
              <span>8</span>
            </Box>
          </Box>
        );
    }
  };

  const getTemplateDigit1 = (digit1: number, index: number) => {
    switch (digit1) {
      case 1:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1IndexWord}>{index + 1}</Box>
            <Box className={classes.digit1FirstColumn}>
              <span className={classes.selected}>1</span>
              <span>2</span>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1IndexWord}>{index + 1}</Box>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span className={classes.selected}>2</span>
            </Box>
          </Box>
        );
      default:
        return (
          <Box className={classes.digit1Container}>
            <Box className={classes.digit1IndexWord}>{index + 1}</Box>
            <Box className={classes.digit1FirstColumn}>
              <span>1</span>
              <span>2</span>
            </Box>
          </Box>
        );
    }
  };

  const decodeWord = (wordIndex: number, index: number) => {
    const normalizeWordIndex = zeroPad(wordIndex + 1, 4);
    const digit1 = parseInt(normalizeWordIndex[0]);
    const digit2 = parseInt(normalizeWordIndex[1]);
    const digit3 = parseInt(normalizeWordIndex[2]);
    const digit4 = parseInt(normalizeWordIndex[3]);

    const digit1Result = getTemplateDigit1(digit1, index);
    const digit2Result = getTemplateDigits(2, digit2, index);
    const digit3Result = getTemplateDigits(3, digit3, index);
    const digit4Result = getTemplateDigits(4, digit4, index);

    return (
      <Tooltip
        title={`${normalizeWordIndex} - ${wordList[wordIndex]}`}
        placement={index < 6 || (index >= 12 && index <= 17) ? "left" : "right"}
        key={`word${index}`}
      >
        <Box className={classes.numberContainer}>
          <Box>{digit1Result}</Box>
          <Box>{digit2Result}</Box>
          <Box>{digit3Result}</Box>
          <Box>{digit4Result}</Box>
        </Box>
      </Tooltip>
    );
  };

  useEffect(() => {
    const arrayWords = words.split(" ");
    const arrayIds = [];
    arrayWords.forEach((element: string) => {
      arrayIds.push(getWordId(element));
    });
    setWordIds(arrayIds);
  }, [words]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className={classes.title}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Protocol 1248
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="h4"
          component="h1"
          gutterBottom
        >
          stackbit metal wallet tool
        </Typography>
        <DebounceInput
          className={classes.textareaClass}
          minLength={1}
          debounceTimeout={1000}
          element="textarea"
          onChange={(e) => {
            setWords(e.target.value);
          }}
          value={words}
        />
        <Box className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleGenerateRandom}
            style={{ background: "#ffcc29", color: "#212112" }}
          >
            generate random
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={handleClean}
            style={{ borderColor: "#fff", color: "#fff" }}
          >
            Clean
          </Button>
        </Box>
        {wordIds.length > 2 && (
          <Box className={classes.walletContainer}>
            <Box className={classes.wallet}>
              {wordIds.map((id, index) => {
                if (index < 12) {
                  return decodeWord(id, index);
                }
              })}
            </Box>
            <Box className={classes.wallet}>
              {wordIds.map((id, index) => {
                if (index >= 12 && index < 24) {
                  return decodeWord(id, index);
                }
              })}
            </Box>
          </Box>
        )}
        {words.length > 0 && (
          <Box>
            <Typography
              className={classes.subtitle2}
              variant="h4"
              component="h1"
              gutterBottom
            >
              word list
            </Typography>
            <Box className={classes.listWordContainer}>
              <Box className={classes.listWordColumn}>
                {wordIds.map((id, index) => {
                  if (index < 12) {
                    return listWord(id, index);
                  }
                })}
              </Box>
              <Box className={classes.listWordColumn}>
                {wordIds.map((id, index) => {
                  if (index >= 12 && index < 24) {
                    return listWord(id, index);
                  }
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Home;
