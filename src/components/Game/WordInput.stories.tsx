import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import WordInput from './WordInput';

const meta: Meta<typeof WordInput> = {
    title: 'Crossword/WordInput',
    component: WordInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        setActiveElementIndex: fn(),
        setInputWord: fn(),
    },
    decorators: [
        (Story) => (
            <div style={{ width: '60px', height: '60px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof WordInput>;

export const Empty: Story = {
    args: {
        elementIndex: { row: 0, col: 0 },
        activeElementIndex: { row: -1, col: -1 },
        inputWords: [['', '', ''], ['', '', ''], ['', '', '']],
        crosswordWords: [['A', 'B', 'C'], ['A', 'B', 'C'], ['A', 'B', 'C']],
    },
};

export const Active: Story = {
    args: {
        elementIndex: { row: 0, col: 0 },
        activeElementIndex: { row: 0, col: 0 },
        inputWords: [['', '', ''], ['', '', ''], ['', '', '']],
        crosswordWords: [['A', 'B', 'C'], ['A', 'B', 'C'], ['A', 'B', 'C']],
    },
};

export const Correct: Story = {
    args: {
        elementIndex: { row: 0, col: 0 },
        activeElementIndex: { row: -1, col: -1 },
        inputWords: [['A', '', ''], ['', '', ''], ['', '', '']],
        crosswordWords: [['A', 'B', 'C'], ['A', 'B', 'C'], ['A', 'B', 'C']],
    },
};
