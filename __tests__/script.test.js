/**
 * @jest-environment jsdom
 */

const { JSDOM } = require('jsdom');
const { displayProfile } = require('./script.js');

describe('displayProfile', () => {
    let document;
    let profileDiv;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="profile"></div></body></html>`);
        document = dom.window.document;
        profileDiv = document.getElementById('profile');
    });

    test('should display user not found message when data.message is "Not Found"', () => {
        const data = { message: "Not Found" };
        displayProfile(data);

        expect(profileDiv.innerHTML).toBe('<p>User not found.</p>');
    });

    test('should display the user profile when data is valid', () => {
        const data = {
            name: 'John Doe',
            login: 'johndoe',
            avatar_url: 'https://example.com/avatar.jpg',
            bio: 'Software Developer',
            location: 'San Francisco',
            public_repos: 42,
            followers: 100,
            following: 50,
            html_url: 'https://github.com/johndoe'
        };
        displayProfile(data);

        expect(profileDiv.innerHTML).toContain('<h2>John Doe (johndoe)</h2>');
        expect(profileDiv.innerHTML).toContain('<img src="https://example.com/avatar.jpg" alt="johndoe\'s avatar" width="150">');
        expect(profileDiv.innerHTML).toContain('<p><strong>Bio:</strong> Software Developer</p>');
        expect(profileDiv.innerHTML).toContain('<p><strong>Location:</strong> San Francisco</p>');
        expect(profileDiv.innerHTML).toContain('<p><strong>Public Repos:</strong> 42</p>');
        expect(profileDiv.innerHTML).toContain('<p><strong>Followers:</strong> 100</p>');
        expect(profileDiv.innerHTML).toContain('<p><strong>Following:</strong> 50</p>');
        expect(profileDiv.innerHTML).toContain('<a href="https://github.com/johndoe" target="_blank">View Profile on GitHub</a>');
    });
});