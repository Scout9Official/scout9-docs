import { redirect } from 'next/navigation';

export default function DocsPage() {
	redirect('/docs/getting-started/setup');

	return (
		<div id="docs-container">
			<h1>Docs</h1>
		</div>
	);
}
