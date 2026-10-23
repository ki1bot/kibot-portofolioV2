import { ASSET_BASE_URL } from "./portfolio";

const certificateDefinitions = [
  [1, "Dicoding Certificate 1", "dicoding1"],
  [2, "Dicoding Certificate 2", "dicoding2"],
  [3, "Dicoding Certificate 3", "dicoding3"],
  [4, "Dicoding Certificate 4", "dicoding4"],
  [5, "Dicoding Certificate 5", "dicoding5"],
  [6, "Dicoding Certificate 6", "dicoding6"],
  [7, "Dicoding Certificate 7", "dicoding7"],
  [8, "Dicoding Certificate 8", "dicoding8"],
  [9, "Dicoding Certificate 9", "dicoding9"],
  [10, "Dicoding Certificate 10", "dicoding10"],
  [11, "Dicoding Certificate 11", "dicoding11"],
  [12, "RevoU Certificate Data Analytics", "RevoU-DataAnalytics"],
  [13, "RevoU Certificate Software Engineering", "RevoU-SoftwareEngineering"],
  [
    14,
    "Sertifikat Finalis Kompres 16",
    "Finalis SOFTWARE DEVELOPMENT KOMPRES",
    "Finalis SOFTWARE DEVELOPMENT KOMPRES 16",
  ],
  [
    15,
    "Sertifikat Seminar GUIFEST 2026",
    "Seminar Internasional Agrotech with AI",
  ],
  [16, "Sertifikat LSP Semester 1", "sertifikatlsp-semester1"],
  [17, "Sertifikat LSP Semester 2", "sertifikatlsp-semester2"],
  [18, "Sertifikat Kompetensi", "SertifikatKompetensi"],
];

function normalizeTitle(value) {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("id-ID")
    .replace(/\s+/g, " ");
}

function fileNameFromUrl(value) {
  const fileName = String(value || "")
    .split(/[?#]/, 1)[0]
    .split("/")
    .pop();

  try {
    return decodeURIComponent(fileName || "").toLowerCase();
  } catch {
    return String(fileName || "").toLowerCase();
  }
}

function buildAssetUrl(fileName, extension) {
  return `${ASSET_BASE_URL}/sertifikat/${fileName}.${extension}`;
}

function matchesCertificate(certificate, definition) {
  const [id, title, imageName, pdfName = imageName] = definition;

  const normalizedTitle = normalizeTitle(certificate?.title);
  const normalizedImage = fileNameFromUrl(certificate?.img);
  const normalizedPdf = fileNameFromUrl(certificate?.pdf_url);

  const expectedImage = `${imageName}.png`.toLowerCase();
  const expectedPdf = `${pdfName}.pdf`.toLowerCase();

  if (normalizedTitle === normalizeTitle(title)) {
    return true;
  }

  if (normalizedImage === expectedImage) {
    return true;
  }

  if (normalizedPdf === expectedPdf) {
    return true;
  }

  if (
    id === 14 &&
    normalizedImage === "finalis software development kompres 16.png"
  ) {
    return true;
  }

  return false;
}

export function synchronizeCertificates(certificates) {
  const available = Array.isArray(certificates) ? [...certificates] : [];

  return certificateDefinitions.map((definition) => {
    const [id, title, imageName, pdfName = imageName] = definition;

    const defaultImage = buildAssetUrl(imageName, "png");
    const defaultPdf = buildAssetUrl(pdfName, "pdf");

    const matchingIndex = available.findIndex((certificate) =>
      matchesCertificate(certificate, definition),
    );

    const existing =
      matchingIndex >= 0 ? available.splice(matchingIndex, 1)[0] : null;

    return {
      ...existing,
      id,
      title,
      img: id === 14 ? defaultImage : existing?.img || defaultImage,
      pdf_url: id === 14 ? defaultPdf : existing?.pdf_url || defaultPdf,
      type: "pdf",
      order_index: id,
    };
  });
}
