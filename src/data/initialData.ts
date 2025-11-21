/**
 * Initial Data for Digital Garden Portfolio
 * 
 * This file contains all the initial data for technologies, projects,
 * and certifications displayed in the portfolio.
 */

import type { TechItem, Project, Certificate } from '../types';

/**
 * Initial technology and skills data
 * Updated from CV with current tech stack
 */
export const INITIAL_DATA: TechItem[] = [
    // --- LANGUAGES (Core & Data Processing) ---
    { id: '1', name: 'Python (Advanced)', category: 'languages', status: 'active', visibility: 'public', description: 'Backend, Data Eng, AI. Główny język.', tags: ['core', 'advanced'] },
    { id: '2', name: 'SQL (Spark/T-SQL)', category: 'languages', status: 'active', visibility: 'public', description: 'Zaawansowane zapytania, optymalizacja.', tags: ['core', 'data'] },
    { id: '3', name: 'Bash', category: 'languages', status: 'active', visibility: 'public', description: 'Skrypty systemowe i automatyzacja.', tags: ['devops'] },

    // --- DATA ENGINEERING (Platform & Cloud) ---
    { id: '4', name: 'Databricks', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Lakehouse, Asset Bundles (DABs).', tags: ['platform', 'big-data'] },
    { id: '5', name: 'PySpark', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Przetwarzanie rozproszone dużej skali.', tags: ['big-data'] },
    { id: '6', name: 'Delta Lake', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Format tabelaryczny, ACID, Time Travel.', tags: ['storage'] },
    { id: '7', name: 'Unity Catalog', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Governance i zarządzanie danymi.', tags: ['governance'] },
    { id: '8', name: 'Delta Live Tables', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Deklaratywne pipeliny ETL.', tags: ['etl'] },
    { id: '9', name: 'Pandas', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Analiza danych in-memory.', tags: ['analysis'] },

    // --- CLOUD & DEVOPS (Platform, MLOps) ---
    { id: '10', name: 'Azure (ADF, ADLS)', category: 'devops', status: 'active', visibility: 'public', description: 'Data Factory, Storage Gen2, Machine Learning.', tags: ['cloud', 'azure'] },
    { id: '11', name: 'GCP (Vertex AI)', category: 'devops', status: 'active', visibility: 'public', description: 'Platforma AI i BigQuery.', tags: ['cloud', 'gcp'] },
    { id: '12', name: 'Terraform', category: 'devops', status: 'active', visibility: 'public', description: 'Infrastructure as Code (IaC).', tags: ['iac'] },
    { id: '13', name: 'Docker', category: 'devops', status: 'active', visibility: 'public', description: 'Konteneryzacja aplikacji.', tags: ['infra'] },
    { id: '14', name: 'GitHub Actions', category: 'devops', status: 'active', visibility: 'public', description: 'CI/CD pipelines.', tags: ['cicd'] },
    { id: '15', name: 'Azure DevOps', category: 'devops', status: 'active', visibility: 'public', description: 'Zarządzanie repozytoriami i pipelines.', tags: ['cicd'] },
    { id: '16', name: 'MLflow', category: 'data-engineering', status: 'active', visibility: 'public', description: 'Zarządzanie cyklem życia modeli ML.', tags: ['mlops'] },

    // --- TOOLS (Quality & Security) ---
    { id: '17', name: 'Code Quality Stack', category: 'tools', status: 'active', visibility: 'public', description: 'Ruff, Mypy, SonarQube.', tags: ['quality'] },
    { id: '18', name: 'Security', category: 'tools', status: 'active', visibility: 'public', description: 'Snyk, OAuth2 implementation.', tags: ['security'] },

    // --- BUSINESS & MANAGEMENT ---
    { id: '19', name: 'Agile / Scrum', category: 'business', status: 'active', visibility: 'public', description: 'Metodyki zwinne.', tags: ['management'] },
    { id: '20', name: 'Jira / Confluence', category: 'business', status: 'active', visibility: 'public', description: 'Zarządzanie zadaniami i dokumentacją.', tags: ['tools'] },

    // --- OTHER / LEARNING ---
    { id: '21', name: 'AI Agents', category: 'data-engineering', status: 'learning', visibility: 'public', description: 'Autonomiczne systemy decyzyjne.', tags: ['future'] },
    { id: '22', name: 'Polski / Angielski', category: 'soft-skills', status: 'active', visibility: 'public', description: 'Native / Full Business Proficiency.', tags: ['lang'] },
];

/**
 * Initial projects data
 */
export const INITIAL_PROJECTS: Project[] = [
    {
        id: 'p1',
        title: 'Autonomous Data Pipeline',
        shortDescription: 'Samodzielny orkiestrator ETL oparty na Azure Data Factory i Pythonie.',
        fullDescription: 'Zaprojektowałem i wdrożyłem w pełni zautomatyzowany pipeline danych przetwarzający 5TB danych dziennie. System wykorzystuje Azure Functions do triggerowania procesów oraz PySpark na Databricks do transformacji. Zaimplementowałem autorski moduł Quality Assurance, który automatycznie wykrywa anomalie w danych przed załadowaniem do hurtowni.',
        date: 'Sierpień 2024',
        techStack: ['Azure', 'Python', 'Databricks', 'SQL'],
        imageCount: 2
    },
    {
        id: 'p2',
        title: 'Market Analysis AI Agent',
        shortDescription: 'Agent AI analizujący trendy rynkowe w czasie rzeczywistym.',
        fullDescription: 'Prototyp startupowy wykorzystujący model LLM (GPT-4) oraz bazę wektorową (Pinecone) do analizy sentymentu z newsów finansowych. Agent potrafi samodzielnie agregować źródła, oceniać ich wiarygodność i generować raporty inwestycyjne. Projekt stworzony w ramach researchu nad autonomią w systemach decyzyjnych.',
        date: 'Styczeń 2025',
        techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'FastAPI'],
        imageCount: 3
    },
    {
        id: 'p3',
        title: 'Smart Home IoT Hub',
        shortDescription: 'Prywatny hub do zarządzania inteligentnym domem z lokalnym ML.',
        fullDescription: 'System integrujący czujniki Zigbee z dashboardem napisanym w React. Całość działa na klastrze Raspberry Pi (k3s). Wdrożyłem prosty model ML (TensorFlow Lite) do predykcji zużycia energii i optymalizacji ogrzewania w oparciu o prognozę pogody i obecność domowników.',
        date: 'Maj 2024',
        techStack: ['IoT', 'Docker', 'K3s', 'React', 'TensorFlow'],
        imageCount: 1
    }
];

/**
 * Initial certifications data
 */
export const INITIAL_CERTS: Certificate[] = [
    { id: 'c1', name: 'Azure Data Engineer Associate (DP-203)', issuer: 'Microsoft', date: '2024', iconType: 'azure' },
    { id: 'c2', name: 'Professional Cloud Architect', issuer: 'Google Cloud', date: '2023', iconType: 'gcp' },
    { id: 'c3', name: 'TensorFlow Developer Certificate', issuer: 'Google', date: '2022', iconType: 'generic' },
];

/**
 * Admin password for accessing private workspace
 * 
 * NOTE: This is hardcoded for static site simplicity.
 * For production with sensitive data, implement proper authentication.
 */
export const ADMIN_PASSWORD = "admin123";
