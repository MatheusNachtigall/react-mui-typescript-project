import {
  Box,
  TextField,
  Button,
  Paper,
  useTheme,
  Icon,
  InputAdornment,
} from "@mui/material";

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarBotaoNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  aoMudarTextoDaBusca,
  mostrarInputBusca = false,
  textoDaBusca = "",
  aoClicarBotaoNovo,
  mostrarBotaoNovo = true,
  textoBotaoNovo = "Novo",
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={1}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
          value={textoDaBusca}
          onChange={(e) => {
            aoMudarTextoDaBusca?.(e.target.value);
          }}
        ></TextField>
      )}
      <Box flex={1} display="flex" justifyContent={"end"}>
        {mostrarBotaoNovo && (
          <Button
            variant={"contained"}
            color={"primary"}
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarBotaoNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
