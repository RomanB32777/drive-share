import { FC } from "react";

import { IComponentWithModificator } from "shared/interfaces";

export const AuthPage: FC<IComponentWithModificator> = ({ modificator }) => {
	return <div className={modificator}></div>;
};
