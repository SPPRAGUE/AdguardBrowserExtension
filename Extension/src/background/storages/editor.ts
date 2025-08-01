/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class used to persist user rules editor content in memory
 * during switches between common and fullscreen modes.
 */
class EditorStorage {
    // current content
    private data: string | undefined;

    /**
     * Sets user rules editor content.
     *
     * @param data User rules editor content.
     */
    set(data: string): void {
        this.data = data;
    }

    /**
     * Returns user rules editor content.
     *
     * @returns User rules editor content.
     */
    get(): string | undefined {
        return this.data;
    }
}

export const editorStorage = new EditorStorage();
