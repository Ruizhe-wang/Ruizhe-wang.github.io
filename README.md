# Ruizhe Wang / 王睿哲

Bilingual academic homepage built with Astro, TypeScript and plain CSS. All ten content pages are statically generated for GitHub Pages. No database, external fonts or client-side framework is needed.

The visual layout follows a plain academic homepage: author information in a left sidebar and text, lists and publications in a reading column. Layout references supplied by the owner: [Tianyu Liu](https://helloworldlty.github.io/publications/) and [Zelin Zang](https://zangzelin.github.io/). Only layout patterns informed the design; their personal information and achievements are not used as this site's content.

## Local development

Use Node.js 22.12 or newer (an even-numbered release).

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321/zh/` or `/en/`.

```sh
npm run check
npm run build
npm run preview
```

## Content

- `src/data/profile.ts`: shared identity, interests, education, publication metadata and both languages' copy.
- `src/pages/[lang]/[...page].astro`: home, research, publications, CV and contact layouts.
- `src/styles/global.css`: the academic sidebar layout, typography and responsive rules.
- `public/assets/cv.pdf`: downloadable CV; keep its contents aligned with the site.
- `public/assets/dmt-dens.bib`: citation, aligned with the publication metadata.

Current role, PhD availability, name, portrait reuse and interests were confirmed by the owner on 2026-10-13. Education, scholarships and historical DMTME experience come from the supplied CV. The owner requested removal of the older wet-lab, biodiversity and GAN/RNA projects and the lectin manuscript; they are excluded from the website content. At the owner's later request, the downloadable CV is the original pre-redesign PDF, restored byte for byte; it still contains its original historical content.

The only publication is [DMT-Dens](https://arxiv.org/abs/2608.17571). Title, authors, year and code link were verified from this arXiv record. It is described as a **preprint**; no journal acceptance, journal publication or unverified performance claim is implied.

The owner subsequently corrected the website's master's subject to Quantitative Biology and Bioinformatics (计量生物学和生物信息学) and added Weights & Biases (W&B) to the tools list. These corrections are reflected across both languages; the original downloadable PDF remains unchanged.

`public/assets/images/dmt-dens-embeddings.png` is Figure 3 from the [arXiv HTML version](https://arxiv.org/html/2608.17571v1), downloaded from `https://arxiv.org/html/2608.17571v1/Fig/embedding_paper_final.png`. Authors: Ruizhe Wang, Yixuan Dong, Bolin Yang, Bingo Wing-Kuen Ling, Fuji Yang and Zelin Zang (2026). License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The image is reproduced without content changes and displayed at a smaller size. Captions link to the original.

## Publishing

The existing `ruizhe-wang.github.io` address is retained. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source. **Deploy academic website** builds and publishes each push to `master`; it can also be run manually from Actions. Draft branches do not publish automatically.

Old `/about/`, `/education/`, `/skills/`, `/research-projects/` and `/publications/` addresses have static redirects. `/assets/cv.pdf` is retained. `/` leads to English; language switches retain the equivalent page.

The complete previous checkout, Git history and original CV were backed up outside the repository before replacement:

`/Users/ruizhewang/ruizhe/website-backups/Ruizhe-wang.github.io/20261013-131429/`

The backup includes a restore guide, Git bundle and verified SHA-256 manifest. It is local and not included in the deployed site.
