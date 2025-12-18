import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';

const answer = await input({ message: 'Enter your name' });