# 🚀 trialrun.io – Engineering Portfolio Hub

The official showcase and portfolio website for **Rajalaxmi** (Full Stack & Cloud-Native AI Engineer), hosted at **`trialrun.io`**.

Showcases real-world engineering work, starting with the **[AI Holiday Planner](https://ai-holiday-planner.trialrun.in/)**, full-stack architecture, GitHub profile, and LinkedIn.

---

## 🛠️ Tech Stack
- **Frontend Framework:** React 19, Vite
- **Styling:** Tailwind CSS v4, Lucide Icons
- **Production Server:** Nginx (alpine)
- **Deployment Platform:** Google Cloud Run (Serverless Container)

---

## 💻 Local Development

Navigate to the project root and run:

```bash
# Install dependencies (already prepared)
npm install

# Start Vite dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ☁️ Deploying to Google Cloud Run

### Option A: Using Google Cloud Build (One-Command Deploy)
From the `D:\dev\trialrun` folder:

```bash
# Set your GCP Project ID
gcloud config set project <YOUR_GCP_PROJECT_ID>

# Build image & deploy directly to Cloud Run
gcloud run deploy trialrun-showcase \
  --source . \
  --platform managed \
  --region asia-south2 \
  --allow-unauthenticated \
  --port 8080
```

---

### Option B: Using Local Docker Build & Push

```bash
# 1. Build Docker image
docker build -t gcr.io/<YOUR_GCP_PROJECT_ID>/trialrun-showcase:latest .

# 2. Push to Google Container Registry / Artifact Registry
docker push gcr.io/<YOUR_GCP_PROJECT_ID>/trialrun-showcase:latest

# 3. Deploy to Cloud Run
gcloud run deploy trialrun-showcase \
  --image gcr.io/<YOUR_GCP_PROJECT_ID>/trialrun-showcase:latest \
  --platform managed \
  --region asia-south2 \
  --allow-unauthenticated \
  --port 8080
```

---

## 🌐 Mapping Custom Domain (`trialrun.io`) in Google Cloud

Once the service is deployed to Cloud Run:

1. Open the [Google Cloud Console](https://console.cloud.google.com/run).
2. Go to **Cloud Run** > Click **Manage Custom Domains** (or **Integrations** > **Custom Domains**).
3. Click **Add Mapping**:
   - **Service to route to:** `trialrun-showcase`
   - **Domain:** `trialrun.io`
4. Google Cloud will provide the required DNS records (typically an `A` record and `AAAA` records, or `CNAME`).
5. Add these DNS records to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
6. Google Cloud will automatically provision a managed SSL certificate for `https://trialrun.io`!
