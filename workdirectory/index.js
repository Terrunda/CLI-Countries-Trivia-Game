#!/usr/bin/env node
import { checkbox } from '@inquirer/prompts';
import {returnCountryTable, sortCountriesByContinent, sortCountriesByDifficulty} from '../library/countries.js'
import chalk from 'chalk';

