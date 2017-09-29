import React from 'react';
import expect from 'expect';
import { authorsFormatterForDropdown } from './selectors';

describe('Authors Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it ('should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'keerthi-nelaturu', firstName: 'Keerthi', lastName: 'Nelaturu' },
                { id: 'praneeth-vavilla', firstName: 'Praneeth', lastName: 'Vavilla' }
            ];

            const formattedAuthors = [
                { value: 'keerthi-nelaturu', text: 'Keerthi Nelaturu' },
                { value: 'praneeth-vavilla', text: 'Praneeth Vavilla' }
            ];

            expect(authorsFormatterForDropdown(authors)).toEqual(formattedAuthors);
        });
    });
});