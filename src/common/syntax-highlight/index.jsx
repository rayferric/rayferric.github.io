// SyntaxHighlight.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const SyntaxHighlight = {
	code({node, inline, className, ...props}) {
		// Set code language declared in code block: ```lang
		const match = /language-(\w+)/.exec(className || '');
		return !inline && match ? (
			<SyntaxHighlighter
				style={ dracula }
				language={ match[1] }
				PreTag='div'
				className='codeStyle'
				showLineNumbers={ true }
				{ ...props }
			/>
		) : (
			<code className={ className } { ...props } />
		);
	}
};

export default SyntaxHighlight;
