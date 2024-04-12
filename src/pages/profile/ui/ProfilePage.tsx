import { FC } from "react";

import { IComponentWithModificator } from "shared/interfaces";

export const ProfilePage: FC<IComponentWithModificator> = ({ modificator }) => {
	return <div className={modificator}></div>;
};
