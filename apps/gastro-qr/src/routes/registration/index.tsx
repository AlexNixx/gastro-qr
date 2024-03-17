import { createFileRoute } from '@tanstack/react-router';

import { AuthPage } from '../../pages';

export const Route = createFileRoute('/registration/')({
  component: () => <AuthPage />
});
