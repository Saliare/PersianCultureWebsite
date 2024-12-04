import React from 'react';

export default function LanguageSwitcher() {
    return (
        <div className="language-switcher">
            <select>
                <option value="en">English</option>
                <option value="fa">فارسی</option>
                <option value="ar">العربية</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
            </select>
        </div>
    );
}
