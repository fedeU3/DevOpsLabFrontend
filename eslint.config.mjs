import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';

export default tseslint.config(
  // Base JS
  eslint.configs.recommended,

  // TypeScript (mantengo tu set actual para no “subir” reglas de golpe)
  ...tseslint.configs.recommended,

  // React Hooks (Rules of Hooks + exhaustive-deps)
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // React Refresh (preset para Vite)
  reactRefresh.configs.vite(),

  // Prettier: apaga reglas que chocan con formateo
  prettier,

  // Tus ajustes de proyecto
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        // Opción moderna (recomendada por typescript-eslint) para proyectos con TS “real”
        // Si te diera problemas, abajo te dejo el fallback con `project`.
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // ✅ quitado: '@typescript-eslint/interface-name-prefix' (regla removida)

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
    ignores: ['dist/', 'node_modules/', 'coverage/', '.eslintrc.*', 'eslint.config.mjs'],
  },
);
