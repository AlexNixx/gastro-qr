import { createFileRoute } from '@tanstack/react-router';

import { AuthPage } from '../../pages';

export const Route = createFileRoute('/login/')({
  component: () => <AuthPage />
});
