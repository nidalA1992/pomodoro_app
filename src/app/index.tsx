import "./styles/index.scss";

import { Routing } from "pages";

import { withProviders } from "./providers";

//TODO: Декомпозировать приложение, убрать ненужную вложенность

const App = () => <Routing />;

export default withProviders(App);
