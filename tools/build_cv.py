"""Rebuild the English CV, retaining the supplied CV's content and visual style.

Requires reportlab. The 2026-10-14 additions are DMT-Dens (with editor)
and the current research internship at Tsientang Institute for Advanced Study (TIAS).
Run with an output path; the site serves public/assets/cv.pdf.
"""

from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether,
)


def build(output):
    font_dir = Path('/System/Library/Fonts/Supplemental')
    regular = font_dir / 'Times New Roman.ttf'
    bold = font_dir / 'Times New Roman Bold.ttf'
    italic = font_dir / 'Times New Roman Italic.ttf'
    if regular.exists() and bold.exists() and italic.exists():
        for name, path in [('CV', regular), ('CV-Bold', bold), ('CV-Italic', italic)]:
            pdfmetrics.registerFont(TTFont(name, str(path)))
        pdfmetrics.registerFontFamily('CV', normal='CV', bold='CV-Bold', italic='CV-Italic')
        normal, strong = 'CV', 'CV-Bold'
    else:
        normal, strong = 'Times-Roman', 'Times-Bold'
    blue = colors.HexColor('#2B73BD')
    width = 595.32001 - 2 * 33.36
    body = ParagraphStyle('Body', fontName=normal, fontSize=10.56,
                          leading=14.3, spaceAfter=2)
    bullet = ParagraphStyle('Bullet', parent=body, leftIndent=21.96,
                            bulletIndent=0, spaceAfter=1)
    heading = ParagraphStyle('Heading', parent=body, fontName=strong,
                             textColor=blue, leading=14.3)
    title = ParagraphStyle('Title', parent=body, fontName=strong,
                           fontSize=26.04, leading=32, alignment=TA_CENTER,
                           textColor=blue)
    right = ParagraphStyle('Right', parent=body, alignment=TA_RIGHT)
    project_title = ParagraphStyle('Project', parent=body, fontName=strong,
                                   spaceAfter=3)
    story = []

    def p(text, style=body):
        return Paragraph(text, style)

    def b(text):
        return Paragraph(text, bullet, bulletText='•')

    def section(text):
        story.append(Spacer(1, 7))
        row = Table([[p(text, heading)]], colWidths=[width])
        row.setStyle(TableStyle([
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 0),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
            ('LINEBELOW', (0, 0), (-1, -1), .5, blue),
        ]))
        row.keepWithNext = True
        story.extend([row, Spacer(1, 4)])

    def project(name, items):
        story.append(KeepTogether([p(name, project_title), *[b(item) for item in items]]))
        story.append(Spacer(1, 7))

    story.extend([p('Ruizhe Wang', title), Spacer(1, 10),
                  p('Mobile: +86-18874228780', right)])
    contacts = Table([[p('Nationality: Chinese'), p(
        'Email: <link href="mailto:ruizhewang7627@outlook.com" color="#2B73BD">'
        '<u>ruizhewang7627@outlook.com</u></link>', right)]], colWidths=[width / 2] * 2)
    contacts.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(contacts)

    section('Education Background')
    story.extend([
        b('2020.09 - 2023.06 &nbsp; <b>Shandong University (SDU)</b>'),
        p('Bachelor of Biological Science (GPA: 86.09/100)', bullet),
        b('2023.07 - 2025.07 &nbsp; <b>The Australian National University</b>'),
        p('Master of Science in Quantitative Biology (GPA: 6.3/7)', bullet),
        b('Relevant coursework: Molecular biology, Bioinformatics, Biochemistry, Genetics, '
          'Mathematical analysis, Linear regression, Theoretical and Applied Genetics, '
          'Machine Learning, Neural Networks, Structured Programming, Statistics, R'),
    ])

    section('Publication')
    # DMT-Dens authors and title were verified from arXiv; editorial status is
    # owner-provided. The earlier lectin publication was removed at the owner's request.
    story.append(p(
        '1. <b>Ruizhe Wang</b>, Yixuan Dong, Bolin Yang, Bingo Wing-Kuen Ling, Fuji Yang, '
        'Zelin Zang. DMT-Dens: Density-preserving manifold visualization for biological data. '
        '2026 <b>(with editor)</b>. '
        '<link href="https://arxiv.org/abs/2608.17571" color="#2B73BD">arXiv:2608.17571</link>'))
    section('Research Projects')
    project('Molecular characterization and functional analysis of a Fucose-binding Lectin '
            'from roughskin sculpin <i>Trachidermus fasciatus</i>', [
        'Supervisor: Dr. Shanshan Yu (Marine College, SDU)',
        'Research Methods: gene cloning, sequence analysis, structural prediction, tissue '
        'distribution, expression profiling, stimulus-induced changes, and in vitro bioactivity tests',
        'Finished 1 academic paper as co-author',
    ])
    project('Application of GAN Model Integrating Evolutionary Information in RNA secondary '
            'structure prediction', [
        'Supervisor: Brian Parker and Jiayu Wen (John Curtin School of Medical Research, ANU)',
        'Integrating conserved RNA structure information into RNA structure prediction '
        'using AI for Science (AI4Sci) approaches.',
    ])
    project('Identification and analysis of antimicrobial peptide gene from <i>Rapana venosa</i>', [
        'Supervisor: Dr. Shanshan Yu (Marine College, SDU)',
        'Identified and cloned the antimicrobial peptide gene',
        'Utilized bioinformatics techniques to predict the structure and functional domain',
        'Applied MEGA to explore phylogenetic relationships',
    ])
    project('Plant Diversity Survey and Ecology Study of Weihai city', [
        'Supervisor: Prof. Zhao Hong (Marine College, SDU)',
        'Conducting field surveys of plant diversity, distribution and quantity in mountains of Weihai city',
        'Completed the work and reports and found more than 70 species, more than 50 specimens '
        'of plants have been prepared',
        'Providing basic data for plant diversity research and conservation',
    ])
    project('Coastal animal diversity study of Golden Beach of Weihai city', [
        'Supervisor: Dr. Liu Xu (Marine College, SDU)',
        'Collected more than 40 different specimens of marine organism',
        'Provided data support and theoretical basis for the protection of wild Marine animal '
        'resources, and provides reference for the Marine resources research of Weihai City',
    ])

    section('Internship Experience')
    project('Current &nbsp; Tsientang Institute for Advanced Study (TIAS) - Research Intern', [
        'Research interests: AI, machine learning, AI for Science, manifold learning, and agentic frameworks.',
    ])
    project('2025.10 - 2025.12 &nbsp; DMTME Project - AI for Science (AI4Sci) Research Intern', [
        'Participated in the research of <b>DMTME (MOE-Enhanced Explainable Deep Manifold '
        'Transformation)</b> model for complex data embedding and visualization',
        'Conducted computational experiments and performed data analysis to validate model '
        'performance on diverse datasets',
        'Gained hands-on experience with PyTorch Lightning framework for deep learning model '
        'development and training pipelines',
        'Familiarized with the complete workflow of deep learning research, including data '
        'preprocessing, model architecture design, hyperparameter tuning, and experimental result analysis',
    ])

    section('Scholarships and Awards')
    project('Shandong University and Australian National University Joint Science College 2021', [
        'Ranked top 15%',
    ])
    project('Director’s Scholarship for Academic Excellence 2023', [
        'Ranked 1% in the program, received scholarship of A$15,000',
    ])

    section('Languages and Skills')
    story.extend([
        b('<b>Analytics and Coding:</b> Proficient in Excel, R programming language, '
          'Python (PyTorch, TensorFlow, Lightning), Java, SQL'),
        b('<b>Version Control:</b> Experienced in using Git for version control, '
          'collaborative development, and code management.'),
        b('<b>AI/Deep Learning:</b> Experience in neural network architecture design, model '
          'training and optimization, deep manifold learning, AI for Science (AI4Sci) applications'),
        b('<b>Languages:</b><br/>Chinese (Mother tongue level)<br/>English (Proficient, IELTS 7.5)'),
    ])

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont(normal, 9)
        canvas.setFillColor(colors.HexColor('#666666'))
        canvas.drawRightString(561.96, 28, str(doc.page))
        canvas.restoreState()

    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(output), pagesize=(595.32001, 841.92004),
                            leftMargin=33.36, rightMargin=33.36,
                            topMargin=69, bottomMargin=48,
                            title='Ruizhe Wang - Curriculum Vitae', author='Ruizhe Wang')
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == '__main__':
    build(sys.argv[1] if len(sys.argv) > 1 else 'public/assets/cv.pdf')
