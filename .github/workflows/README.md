# GitHub Actions Workflows

This directory contains automated CI/CD workflows for ICARUS Terminal.

## Workflows

### 1. Build and Release (`build-release.yml`)
**Triggered on:**
- Push to `main` or `update` branches
- New tags starting with `v*` (e.g., `v0.22.0`)
- Pull requests to `main`

**What it does:**
1. Sets up Node.js 20 and Go 1.23
2. Installs NSIS for Windows installer creation
3. Runs linting and type checking
4. Builds the client application (Next.js)
5. Builds the Go application (ICARUS Terminal.exe)
6. Builds the Node.js service
7. Creates package structure
8. Generates Windows installer (.exe)
9. Uploads build artifacts
10. **On tag push**: Creates GitHub release with installer

### 2. Continuous Integration (`ci.yml`)
**Triggered on:**
- Pull requests to `main` or `update`
- Push to `update` branch

**What it does:**
1. Quick validation build without installer
2. Runs code quality checks
3. Security audit
4. Tests Go module compilation
5. Provides fast feedback for development

## Creating a Release

To create a new release:

1. **Update version** in `package.json`
2. **Commit changes** to `update` branch
3. **Create and push tag:**
   ```bash
   git tag v0.22.1
   git push origin v0.22.1
   ```
4. **GitHub Actions will automatically:**
   - Build the application
   - Create installer
   - Create GitHub release
   - Upload installer as release asset

## Build Artifacts

The workflows generate:
- **Build artifacts**: Compiled application files
- **Installer**: `ICARUS-Terminal-Setup.exe` - Windows installer
- **Release**: GitHub release with changelog and installer download

## Requirements

The workflows expect:
- Node.js project with `package.json`
- Go modules in `src/app/`
- NSIS installer script in `installer/installer.nsi`
- LICENSE file for installer

## Troubleshooting

If builds fail:
1. Check the Actions tab for detailed logs
2. Ensure all dependencies are properly declared
3. Verify NSIS script syntax
4. Check that all required files exist

## Local Testing

To test the build process locally:
```bash
# Install dependencies
npm ci

# Run linting
npm run lint:javascript
npm run type-check

# Build application
npm run build

# Build installer (requires NSIS)
npm run build:installer
```