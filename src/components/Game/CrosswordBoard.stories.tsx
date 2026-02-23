import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import CrosswordBoard from './CrosswordBoard';

const meta: Meta<typeof CrosswordBoard> = {
    title: 'Crossword/CrosswordBoard',
    component: CrosswordBoard,
    parameters: {
        layout: 'centered',
    },
    args: {
        setActiveElementIndex: fn(),
        setInputWord: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof CrosswordBoard>;

export const NewGame: Story = {
    args: {
        activeElementIndex: { row: -1, col: -1 },
        inputWords: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        crosswordWords: [
            ['C', 'A', 'T'],
            ['D', 'O', 'G'],
            ['B', 'E', 'E'],
        ],
    },
};

export const InProgress: Story = {
    args: {
        activeElementIndex: { row: 1, col: 1 },
        inputWords: [
            ['C', 'A', 'T'],
            ['D', '', ''],
            ['', '', ''],
        ],
        crosswordWords: [
            ['C', 'A', 'T'],
            ['D', 'O', 'G'],
            ['B', 'E', 'E'],
        ],
    },
};

export const Completed: Story = {
    args: {
        activeElementIndex: { row: -1, col: -1 },
        inputWords: [
            ['C', 'A', 'T'],
            ['D', 'O', 'G'],
            ['B', 'E', 'E'],
        ],
        crosswordWords: [
            ['C', 'A', 'T'],
            ['D', 'O', 'G'],
            ['B', 'E', 'E'],
        ],
    },
};
