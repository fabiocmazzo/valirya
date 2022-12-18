import { Card, Space, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, LeftContainer, Logo } from './styles';

const { Title } = Typography;

function WelcomeLeftContainer({
	version,
	children,
}: WelcomeLeftContainerProps): JSX.Element {
	const { t } = useTranslation();

	return (
		<Container>
			<LeftContainer direction="vertical">
				<Space align="center">
					<Logo src="ValyriaLogo.png" alt="Valyria Logo" height="64px" width="200" />
				</Space>
				<Typography>{t('monitor_signup')}</Typography>
				<Card
					style={{ width: 'max-content' }}
					bodyStyle={{ padding: '1px 8px', width: '100%' }}
				>
					Valyria v1.12.0
				</Card>
			</LeftContainer>
			{children}
		</Container>
	);
}

interface WelcomeLeftContainerProps {
	version: string;
	children: React.ReactChild;
}

export default WelcomeLeftContainer;
