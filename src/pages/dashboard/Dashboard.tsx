import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Dashboard"
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca />}
    >
      Teste
    </LayoutBaseDePagina>
  );
};
