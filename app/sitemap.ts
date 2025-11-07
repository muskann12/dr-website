import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dryousufmemon.pk";

  return [
    // 🏠 Main Pages
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/youtube`, lastModified: new Date() },

    // 🩺 Services
    { url: `${baseUrl}/services/bleeding-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/services/brain-tumor-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/services/hemoptysis-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/services/hemorrhoid-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/services/ivc-filter-placement`, lastModified: new Date() },
    { url: `${baseUrl}/services/liver-cancer`, lastModified: new Date() },
    { url: `${baseUrl}/services/meningioma-treatment`, lastModified: new Date() },
    { url: `${baseUrl}/services/permacath-placement`, lastModified: new Date() },
    { url: `${baseUrl}/services/ptc-ptbd-stenting`, lastModified: new Date() },
    { url: `${baseUrl}/services/tumor-ablation`, lastModified: new Date() },
    { url: `${baseUrl}/services/picc-line-placement`, lastModified: new Date() },
    { url: `${baseUrl}/services/uterine-fibroid-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/services/lower-limb-angioplasty`, lastModified: new Date() },

    // 💊 Treatments
    { url: `${baseUrl}/treatments/eye-treatment`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/brain-aneurysm-coiling`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/cyst-treatment`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/varicocele-embolization`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/ozone-joint-treatment`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/varicose-veins`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/venous-leak`, lastModified: new Date() },
    { url: `${baseUrl}/treatments/ozone-disc-herniation`, lastModified: new Date() },

    // 🆕 Manually Added New Pages (yeh tumhare do naye pages hain)
    { url: `${baseUrl}/newpage1`, lastModified: new Date() },
    { url: `${baseUrl}/newpage2`, lastModified: new Date() },
  ];
}
