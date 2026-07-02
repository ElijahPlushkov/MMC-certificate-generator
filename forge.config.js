const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path');

module.exports = {
    packagerConfig: {
        asar: true,
        icon: path.resolve(__dirname, 'mmc-logo'),
        appBundleId: 'com.mmc.certgenerator',
        appCopyright: 'Copyright © 2026 Elijah Plushkov',
        executableName: 'MMC-Cert-Generator',
        // Platform-specific icon handling is automatic:
        // .ico for Windows, .icns for macOS, .png for Linux
    },
    rebuildConfig: {},
    makers: [
        // Windows - Squirrel installer
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'MMC-Cert-Generator',
                authors: 'Elijah Plushkov',
                exe: 'MMC-Cert-Generator.exe',
                setupExe: 'MMC-Cert-Generator-Setup.exe',
                setupIcon: path.resolve(__dirname, 'mmc-logo.ico'),
                iconUrl: 'https://raw.githubusercontent.com/ElijahPlushkov/MMC-certificate-generator/main/mmc-logo.ico',
                // Uncomment below if you want a portable version too
                // noMsi: false,
            },
        },
        // Windows - ZIP (portable-ish)
        {
            name: '@electron-forge/maker-zip',
            platforms: ['win32'],
        },
        // macOS - ZIP
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        // macOS - DMG (better user experience)
        {
            name: '@electron-forge/maker-dmg',
            config: {
                name: 'MMC Certificate Generator',
                icon: path.resolve(__dirname, 'mmc-logo.icns'),
                // You can only build DMG on macOS
            },
        },
        // Linux - DEB
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    maintainer: 'Elijah Plushkov',
                    homepage: 'https://github.com/ElijahPlushkov/MMC-certificate-generator',
                    icon: path.resolve(__dirname, 'mmc-logo.png'),
                },
            },
        },
        // Linux - RPM
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    homepage: 'https://github.com/ElijahPlushkov/MMC-certificate-generator',
                    icon: path.resolve(__dirname, 'mmc-logo.png'),
                },
            },
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};