// keystatic.config.ts
// Konfigurasi Keystatic CMS.
// Schema di sini harus match persis dengan frontmatter yang dibaca src/lib/content.ts
// supaya tulisan lama dan tulisan baru dari UI editor terbaca sama.
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    // 'local' = simpan ke file di komputer, tidak butuh GitHub.
    // Kalau nanti ingin edit langsung dari Vercel (production), ganti ke 'github'.
    kind: "local",
  },

  ui: {
    brand: { name: "Moch Fauzi — CMS" },
  },

  collections: {
    blog: collection({
      label: "Tulisan (Blog)",
      slugField: "title",
      // Path ini harus sama dengan yang dibaca content.ts: content/blog/*.mdx
      path: "content/blog/*",
      // contentField 'content' → semua ditulis dalam satu file MDX,
      // metadata sebagai frontmatter di atas, body di bawah.
      // Hasilnya persis sama dengan format halo-dunia.mdx yang sudah ada.
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Judul" },
        }),
        date: fields.date({
          label: "Tanggal",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: "Ringkasan",
          description: "Satu kalimat singkat yang muncul di daftar tulisan.",
          validation: { isRequired: true },
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tags",
            itemLabel: (props) => props.value,
            description: "Topik tulisan, mis: software, belajar, dsb.",
          }
        ),
        published: fields.checkbox({
          label: "Publikasikan",
          description: "Hilangkan centang untuk menyimpan sebagai draft.",
          defaultValue: true,
        }),
        content: fields.mdx({
          label: "Isi Tulisan",
        }),
      },
    }),
  },
});
