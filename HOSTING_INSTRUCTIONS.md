# 🚀 Hostinger Hosting Instructions for Dr. Namratha's Website

## 📋 Prerequisites
- Node.js installed on your computer
- Access to your Hostinger hosting account
- Domain configured in Hostinger

## 🛠️ Step 1: Build the Website

1. **Download the project files** from Lovable (or clone the repository)
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Build the production version:**
   ```bash
   npm run build
   ```
5. **This creates a `dist` folder** with all the files needed for hosting

## 📂 Step 2: Upload to Hostinger

### Option A: Using Hostinger File Manager
1. **Login to your Hostinger account**
2. **Go to Hosting → Manage → File Manager**
3. **Navigate to `public_html` folder** (this is your website root)
4. **Delete existing files** in public_html (if any)
5. **Upload all contents** from the `dist` folder to `public_html`
6. **Make sure index.html is in the root** of public_html

### Option B: Using FTP (Advanced)
1. **Get FTP credentials** from Hostinger control panel
2. **Use an FTP client** like FileZilla
3. **Upload all `dist` folder contents** to public_html

## 🔧 Step 3: Configure Domain

1. **Ensure your domain points to Hostinger** nameservers
2. **Wait for DNS propagation** (up to 24 hours)
3. **Test your website** by visiting your domain

## 📱 Step 4: Enable HTTPS (SSL)

1. **In Hostinger control panel** → Security → SSL
2. **Enable SSL certificate** (usually free with Hostinger)
3. **Force HTTPS redirect** in settings

## 🎯 Step 5: Important Notes

### Single Page Application (SPA) Setup
Since this is a React SPA, you need to handle routing:

1. **Create .htaccess file** in public_html with this content:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Performance Optimization
2. **Enable Gzip compression** in Hostinger control panel
3. **Enable browser caching** for static files
4. **Consider using Cloudflare** for CDN (free tier available)

## 🚀 Alternative: Direct Upload from Lovable

If you prefer, you can also:
1. **Use Lovable's publish feature** to get the built files
2. **Download the published website files**
3. **Upload those directly to Hostinger**

## 📞 Contact Integration

All social media links and booking appointments are now integrated:
- ✅ Instagram: https://www.instagram.com/drbijivemulanamratha/
- ✅ Facebook: https://www.facebook.com/profile.php?id=61576557545109
- ✅ Twitter: https://x.com/Dr_Bijivemula
- ✅ Booking: https://www.americanoncology.com/bookanappointment?dr=dr-b-namratha-sai-reddy&location=Hyderabad&spe=medical-oncology

## 🆘 Troubleshooting

**Website shows blank page:**
- Check if index.html is in public_html root
- Verify .htaccess file is created correctly

**Links don't work:**
- Ensure .htaccess file is configured for SPA routing

**Images not loading:**
- Check file paths and ensure all assets uploaded

**SSL issues:**
- Enable SSL in Hostinger control panel
- Wait for certificate generation

## 📈 Next Steps After Hosting

1. **Set up Google Analytics** for tracking
2. **Submit sitemap to Google Search Console**
3. **Test website speed** and optimize if needed
4. **Set up regular backups** in Hostinger

## 💡 Pro Tips

- **Keep source code** for future updates
- **Test on mobile devices** after going live
- **Monitor website performance** regularly
- **Keep Hostinger and domain** renewals up to date

Your website is now ready for professional hosting! 🎉