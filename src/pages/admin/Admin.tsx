import { FC } from "react";

import { IComponentWithModificator } from "shared/interfaces";

export const AdminPage: FC<IComponentWithModificator> = ({ modificator }) => {
	return <div className={modificator}></div>;
};
