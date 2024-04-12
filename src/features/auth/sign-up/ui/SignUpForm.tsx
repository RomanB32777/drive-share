import { FC } from "react";

import { authTypeTitles } from "entities/viewer";
import { usePageTitle } from "shared/lib/hooks";

export const SignUpForm: FC = () => {
	usePageTitle(authTypeTitles["sign-up"]);

	return <div></div>;
};
