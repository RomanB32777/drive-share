import { FC, ReactNode } from "react";

import { AccountForm } from "features/profile";
import { EProfileTabs } from "entities/viewer";
import { Tabs } from "shared/ui";

import styles from "./ProfilePage.module.scss";

interface IProfileTab {
	label: string;
	content: ReactNode;
	disabled?: boolean;
}

export const ProfilePage: FC = () => {
	const tabs: Record<EProfileTabs, IProfileTab> = {
		[EProfileTabs.Account]: {
			label: "Аккаунт",
			content: <AccountForm modificator={styles.content} />,
		},
		[EProfileTabs.Documents]: {
			label: "Документы",
			content: null,
		},
		[EProfileTabs.Applications]: {
			label: "Заявки",
			content: null,
			disabled: true,
		},
		[EProfileTabs.Cars]: {
			label: "Автомобили",
			content: null,
			disabled: true,
		},
	};

	return (
		<div className={styles.wrapper}>
			<Tabs
				defaultActiveKey={EProfileTabs.Account}
				items={Object.values(EProfileTabs).map((value) => {
					const { label, content, disabled } = tabs[value];

					return {
						key: value,
						label,
						disabled,
						children: content,
					};
				})}
			/>
		</div>
	);
};
