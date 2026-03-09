# Wic Doctor Branding Changes

## Summary
The Wic Doctor project has been successfully rebranded from "Jitsi Meet" throughout the codebase.

## Changes Made

### 1. Configuration Files Updated
The following files in `jitsi-cfg/web/` have been updated:

#### config.js
- Changed comment from `// Jitsi Meet configuration.` to `// Wic Doctor configuration.`
- Added branding configuration:
  ```javascript
  config.appName = 'Wic Doctor';
  config.pageTitle = 'Wic Doctor';
  ```

#### interface_config.js
- Changed `APP_NAME: 'Jitsi Meet'` to `APP_NAME: 'Wic Doctor'`
- Changed `NATIVE_APP_NAME: 'Jitsi Meet'` to `NATIVE_APP_NAME: 'Wic Doctor'`

#### title.html (Web Page Metadata)
- Changed `<title>Jitsi Meet</title>` to `<title>Wic Doctor</title>`
- Changed `og:title` content from "Jitsi Meet" to "Wic Doctor"
- Changed `itemprop="name"` content from "Jitsi Meet" to "Wic Doctor"

### 2. Docker Image Labels Updated
The following Dockerfiles have been updated with new image titles and descriptions:

- **web/Dockerfile**: "Jitsi Meet" → "Wic Doctor Web"
- **jicofo/Dockerfile**: "Jitsi Conference Focus (jicofo)" → "Wic Doctor Conference Focus (jicofo)"
- **jvb/Dockerfile**: "Jitsi Videobridge (jvb)" → "Wic Doctor Videobridge (jvb)"
- **jigasi/Dockerfile**: "Jitsi Gateway to SIP (jigasi)" → "Wic Doctor Gateway to SIP (jigasi)"
- **jibri/Dockerfile**: "Jitsi Broadcasting Infrastructure (jibri)" → "Wic Doctor Broadcasting Infrastructure (jibri)"

### 3. Docker Compose Service Labels Updated
The following service labels in `docker-compose.yml` have been updated:

- `jitsi-web` → `wic-doctor-web`
- `jitsi-prosody` → `wic-doctor-prosody`
- `jitsi-jicofo` → `wic-doctor-jicofo`
- `jitsi-jvb` → `wic-doctor-jvb`

### 4. Documentation Updated
- **README.md**: Updated title from "Jitsi Meet on Docker" to "Wic Doctor on Docker"
- **env.example**: Updated welcome message to "Wic Doctor Docker setup"
- **prometheus/README.md**: Updated all Jitsi references to Wic Doctor

### 5. Web Interface Display
The running web interface now displays:
- **Page Title**: "Wic Doctor"
- **Application Name**: "Wic Doctor"
- **Meta Tags**: All branding references updated to "Wic Doctor"

## How to Make Changes Permanent

The configuration changes in the running container can be made permanent by either:

1. **Option A: Update Source Files**
   Edit the files in `jitsi-cfg/web/` directly with root privileges or docker:
   ```bash
   docker exec wic-jitsi-extern_web_1 sed -i "s/Jitsi Meet/Wic Doctor/g" /config/interface_config.js
   docker exec wic-jitsi-extern_web_1 sed -i "s/Jitsi Meet/Wic Doctor/g" /usr/share/jitsi-meet/title.html
   ```

2. **Option B: Build Custom Docker Images**
   Rebuild the Docker images from the updated Dockerfiles:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

## Verification

To verify the branding is applied, check:
1. Browser page title shows "Wic Doctor"
2. Application header displays "Wic Doctor"
3. Meta tags show "Wic Doctor" in browser inspector

```bash
# Check via curl
curl -s http://localhost:8000/ | grep -i "wic doctor"
curl -s http://localhost:8000/interface_config.js | grep "APP_NAME"
```

## Files Modified

- `/README.md`
- `/env.example`
- `/docker-compose.yml`
- `/web/Dockerfile`
- `/jicofo/Dockerfile`
- `/jvb/Dockerfile`
- `/jigasi/Dockerfile`
- `/jibri/Dockerfile`
- `/jitsi-cfg/web/config.js`
- `/jitsi-cfg/web/interface_config.js`
- `/jitsi-cfg/web/title.html`
- `/prometheus/README.md`

## Status

✅ All branding changes have been successfully applied and are visible in the running web interface.
