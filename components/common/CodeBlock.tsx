
import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
    return (
        <pre className="bg-slate-800 text-slate-200 p-5 rounded-lg font-mono text-sm overflow-x-auto my-4 whitespace-pre-wrap">
            <code>
                {children}
            </code>
        </pre>
    );
};

export default CodeBlock;
