// Sample shoe data with custom SVG images
const sampleShoes = [
    // Nike Models
    {
        id: 1001,
        name: "Air Jordan 1 Retro High",
        brand: "Nike",
        size: "9",
        costPrice: 120.00,
        sellingPrice: 170.00,
        quantity: 15,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#dc2626"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#1f2937"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">NIKE</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Air Jordan 1</text>
            </svg>
        `)}`
    },
    {
        id: 1002,
        name: "Air Max 90",
        brand: "Nike",
        size: "10",
        costPrice: 90.00,
        sellingPrice: 130.00,
        quantity: 20,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#3b82f6"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <circle cx="60" cy="65" r="8" fill="#ef4444"/>
                <circle cx="100" cy="70" r="6" fill="#ef4444"/>
                <circle cx="140" cy="65" r="8" fill="#ef4444"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">NIKE</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Air Max 90</text>
            </svg>
        `)}`
    },
    {
        id: 1003,
        name: "React Infinity Run",
        brand: "Nike",
        size: "8.5",
        costPrice: 110.00,
        sellingPrice: 160.00,
        quantity: 12,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#10b981"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M30 75 Q60 70 90 72 Q120 74 150 70" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">NIKE</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">React Infinity</text>
            </svg>
        `)}`
    },
    {
        id: 1004,
        name: "Dunk Low",
        brand: "Nike",
        size: "11",
        costPrice: 80.00,
        sellingPrice: 110.00,
        quantity: 18,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#f59e0b"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <rect x="40" y="55" width="20" height="15" fill="#f59e0b"/>
                <rect x="90" y="60" width="20" height="15" fill="#f59e0b"/>
                <rect x="140" y="55" width="20" height="15" fill="#f59e0b"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">NIKE</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Dunk Low</text>
            </svg>
        `)}`
    },
    {
        id: 1005,
        name: "Blazer Mid '77",
        brand: "Nike",
        size: "9.5",
        costPrice: 85.00,
        sellingPrice: 120.00,
        quantity: 14,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#7c3aed"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M25 65 L35 55 L45 65 L35 75 Z" fill="#7c3aed"/>
                <path d="M155 65 L165 55 L175 65 L165 75 Z" fill="#7c3aed"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">NIKE</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Blazer Mid '77</text>
            </svg>
        `)}`
    },
    // Adidas Models
    {
        id: 2001,
        name: "Stan Smith",
        brand: "Adidas",
        size: "10",
        costPrice: 60.00,
        sellingPrice: 85.00,
        quantity: 25,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#ffffff"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#22c55e"/>
                <circle cx="50" cy="65" r="3" fill="#22c55e"/>
                <circle cx="150" cy="65" r="3" fill="#22c55e"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">adidas</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Stan Smith</text>
            </svg>
        `)}`
    },
    {
        id: 2002,
        name: "Ultraboost 22",
        brand: "Adidas",
        size: "9",
        costPrice: 130.00,
        sellingPrice: 180.00,
        quantity: 10,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#1f2937"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <circle cx="40" cy="75" r="2" fill="#ffffff"/>
                <circle cx="55" cy="72" r="2" fill="#ffffff"/>
                <circle cx="70" cy="75" r="2" fill="#ffffff"/>
                <circle cx="85" cy="72" r="2" fill="#ffffff"/>
                <circle cx="100" cy="75" r="2" fill="#ffffff"/>
                <circle cx="115" cy="72" r="2" fill="#ffffff"/>
                <circle cx="130" cy="75" r="2" fill="#ffffff"/>
                <circle cx="145" cy="72" r="2" fill="#ffffff"/>
                <circle cx="160" cy="75" r="2" fill="#ffffff"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">adidas</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Ultraboost 22</text>
            </svg>
        `)}`
    },
    {
        id: 2003,
        name: "Superstar",
        brand: "Adidas",
        size: "8",
        costPrice: 70.00,
        sellingPrice: 100.00,
        quantity: 22,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#ffffff"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#1f2937"/>
                <path d="M25 65 L30 60 L35 65 L40 60 L45 65 L50 60 L55 65" stroke="#1f2937" stroke-width="1" fill="none"/>
                <path d="M145 65 L150 60 L155 65 L160 60 L165 65 L170 60 L175 65" stroke="#1f2937" stroke-width="1" fill="none"/>
                <path d="M170 70 Q175 65 180 70 Q185 75 190 70" fill="#1f2937"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">adidas</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Superstar</text>
            </svg>
        `)}`
    },
    {
        id: 2004,
        name: "NMD R1",
        brand: "Adidas",
        size: "11",
        costPrice: 95.00,
        sellingPrice: 140.00,
        quantity: 16,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#ef4444"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#1f2937"/>
                <rect x="40" y="72" width="8" height="6" fill="#ef4444"/>
                <rect x="60" y="70" width="8" height="6" fill="#ef4444"/>
                <rect x="80" y="72" width="8" height="6" fill="#ef4444"/>
                <rect x="100" y="70" width="8" height="6" fill="#ef4444"/>
                <rect x="120" y="72" width="8" height="6" fill="#ef4444"/>
                <rect x="140" y="70" width="8" height="6" fill="#ef4444"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">adidas</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">NMD R1</text>
            </svg>
        `)}`
    },
    {
        id: 2005,
        name: "Gazelle",
        brand: "Adidas",
        size: "9.5",
        costPrice: 65.00,
        sellingPrice: 90.00,
        quantity: 19,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#3b82f6"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#3b82f6"/>
                <path d="M30 65 L50 55 L70 65 L90 55 L110 65 L130 55 L150 65 L170 55" stroke="#ffffff" stroke-width="2" fill="none"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">adidas</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Gazelle</text>
            </svg>
        `)}`
    },
    // Puma Models
    {
        id: 3001,
        name: "Suede Classic",
        brand: "Puma",
        size: "10",
        costPrice: 55.00,
        sellingPrice: 80.00,
        quantity: 28,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#7c3aed"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#7c3aed"/>
                <path d="M30 65 Q40 60 50 65 Q60 70 70 65 Q80 60 90 65 Q100 70 110 65 Q120 60 130 65 Q140 70 150 65 Q160 60 170 65" stroke="#ffffff" stroke-width="1" fill="none"/>
                <path d="M40 55 L50 45 L60 55 M140 55 L150 45 L160 55" stroke="#ffffff" stroke-width="2" fill="none"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">PUMA</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Suede Classic</text>
            </svg>
        `)}`
    },
    {
        id: 3002,
        name: "RS-X",
        brand: "Puma",
        size: "9",
        costPrice: 85.00,
        sellingPrice: 120.00,
        quantity: 13,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#f59e0b"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ef4444"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#3b82f6"/>
                <circle cx="45" cy="65" r="4" fill="#ffffff"/>
                <circle cx="75" cy="70" r="4" fill="#ffffff"/>
                <circle cx="105" cy="65" r="4" fill="#ffffff"/>
                <circle cx="135" cy="70" r="4" fill="#ffffff"/>
                <circle cx="165" cy="65" r="4" fill="#ffffff"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">PUMA</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">RS-X</text>
            </svg>
        `)}`
    },
    {
        id: 3003,
        name: "Clyde Court",
        brand: "Puma",
        size: "11",
        costPrice: 100.00,
        sellingPrice: 140.00,
        quantity: 11,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#1f2937"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#f59e0b"/>
                <rect x="35" y="55" width="15" height="8" fill="#1f2937"/>
                <rect x="75" y="60" width="15" height="8" fill="#1f2937"/>
                <rect x="115" y="55" width="15" height="8" fill="#1f2937"/>
                <rect x="155" y="60" width="15" height="8" fill="#1f2937"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">PUMA</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Clyde Court</text>
            </svg>
        `)}`
    },
    {
        id: 3004,
        name: "Future Rider",
        brand: "Puma",
        size: "8.5",
        costPrice: 75.00,
        sellingPrice: 105.00,
        quantity: 17,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#10b981"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ffffff"/>
                <path d="M30 65 L40 55 L50 65 L60 55 L70 65 L80 55 L90 65 L100 55 L110 65 L120 55 L130 65 L140 55 L150 65 L160 55 L170 65" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">PUMA</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Future Rider</text>
            </svg>
        `)}`
    },
    {
        id: 3005,
        name: "Cali Sport",
        brand: "Puma",
        size: "9.5",
        costPrice: 70.00,
        sellingPrice: 95.00,
        quantity: 21,
        image: `data:image/svg+xml;base64,${btoa(`
            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="#f8f9fa"/>
                <path d="M20 80 Q50 60 80 70 Q120 75 160 65 Q180 60 190 70 L190 90 Q180 95 160 90 Q120 95 80 90 Q50 85 20 90 Z" fill="#ffffff"/>
                <path d="M20 70 Q50 50 80 60 Q120 65 160 55 Q180 50 190 60 L190 80 Q180 85 160 80 Q120 85 80 80 Q50 75 20 80 Z" fill="#ec4899"/>
                <path d="M20 60 Q50 40 80 50 Q120 55 160 45 Q180 40 190 50 L190 70 Q180 75 160 70 Q120 75 80 70 Q50 65 20 70 Z" fill="#ffffff"/>
                <circle cx="50" cy="60" r="3" fill="#ec4899"/>
                <circle cx="80" cy="65" r="3" fill="#ec4899"/>
                <circle cx="110" cy="60" r="3" fill="#ec4899"/>
                <circle cx="140" cy="65" r="3" fill="#ec4899"/>
                <text x="100" y="35" text-anchor="middle" fill="#1f2937" font-family="Arial" font-size="12" font-weight="bold">PUMA</text>
                <text x="100" y="105" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Cali Sport</text>
            </svg>
        `)}`
    }
];

// Data storage
let inventory = JSON.parse(localStorage.getItem('shoeStoreInventory')) || [];
let sales = JSON.parse(localStorage.getItem('shoeStoreSales')) || [];
let billItems = [];
let billCounter = parseInt(localStorage.getItem('billCounter')) || 1;

// Initialize with sample data if inventory is empty
if (inventory.length === 0) {
    inventory = [...sampleShoes];
    localStorage.setItem('shoeStoreInventory', JSON.stringify(inventory));
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('[id$="-tab"]').forEach(tab => {
        tab.classList.remove('tab-active');
        tab.classList.add('bg-gray-200', 'text-gray-700');
        tab.classList.remove('text-white');
    });
    
    // Show selected tab content
    document.getElementById(tabName + '-content').classList.remove('hidden');
    
    // Add active class to selected tab
    const activeTab = document.getElementById(tabName + '-tab');
    activeTab.classList.add('tab-active', 'text-white');
    activeTab.classList.remove('bg-gray-200', 'text-gray-700');

    // Refresh data when switching tabs
    if (tabName === 'inventory') {
        displayInventory();
    } else if (tabName === 'billing') {
        updateProductSelect();
    } else if (tabName === 'reports') {
        updateReports();
    }
}

// Image preview functionality
document.getElementById('product-image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            preview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        preview.classList.add('hidden');
    }
});

// Product management
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const imageFile = document.getElementById('product-image').files[0];
    
    const processProduct = (imageBase64) => {
        const product = {
            id: Date.now(),
            name: document.getElementById('product-name').value,
            brand: document.getElementById('product-brand').value,
            size: document.getElementById('product-size').value,
            costPrice: parseFloat(document.getElementById('product-cost').value),
            sellingPrice: parseFloat(document.getElementById('product-price').value),
            quantity: parseInt(document.getElementById('product-quantity').value),
            image: imageBase64
        };
        
        inventory.push(product);
        localStorage.setItem('shoeStoreInventory', JSON.stringify(inventory));
        
        // Add success animation
        this.classList.add('form-success');
        setTimeout(() => this.classList.remove('form-success'), 600);
        
        // Reset form and preview
        this.reset();
        document.getElementById('image-preview').classList.add('hidden');
        
        // Refresh displays
        displayInventory();
        updateProductSelect();
        
        alert('Product added successfully!');
    };
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            processProduct(e.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        processProduct(null);
    }
});

function displayInventory() {
    const inventoryList = document.getElementById('inventory-list');
    const totalItems = document.getElementById('total-items');
    
    if (inventory.length === 0) {
        inventoryList.innerHTML = '<p class="text-gray-500 text-center py-8">No products in inventory</p>';
        totalItems.textContent = '0';
        return;
    }
    
    inventoryList.innerHTML = inventory.map(product => `
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex gap-4 items-start">
                ${product.image ? `
                    <div class="flex-shrink-0">
                        <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded-lg border cursor-pointer" onclick="showImageModal('${product.image}', '${product.name}')">
                    </div>
                ` : `
                    <div class="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg border flex items-center justify-center">
                        <span class="text-gray-400 text-xs">No Image</span>
                    </div>
                `}
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${product.name}</h4>
                    <p class="text-sm text-gray-600">${product.brand} - Size ${product.size}</p>
                    <p class="text-sm text-gray-600">Cost: $${product.costPrice.toFixed(2)} | Price: $${product.sellingPrice.toFixed(2)}</p>
                </div>
                <div class="text-right">
                    <span class="inline-block px-3 py-1 rounded-full text-sm font-medium ${product.quantity <= 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                        ${product.quantity} in stock
                    </span>
                    <button onclick="removeProduct(${product.id})" class="ml-2 text-red-600 hover:text-red-800 text-sm">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    totalItems.textContent = inventory.length;
}

function showImageModal(imageSrc, productName) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-lg max-h-96">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold">${productName}</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <img src="${imageSrc}" alt="${productName}" class="w-full h-auto max-h-80 object-contain rounded">
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function removeProduct(id) {
    if (confirm('Are you sure you want to remove this product?')) {
        inventory = inventory.filter(product => product.id !== id);
        localStorage.setItem('shoeStoreInventory', JSON.stringify(inventory));
        displayInventory();
        updateProductSelect();
    }
}

// Billing functionality
function updateProductSelect() {
    const select = document.getElementById('product-select');
    select.innerHTML = '<option value="">Select Product</option>';
    
    inventory.filter(product => product.quantity > 0).forEach(product => {
        select.innerHTML += `<option value="${product.id}">${product.name} - ${product.brand} (Size ${product.size}) - $${product.sellingPrice.toFixed(2)} (${product.quantity} available)</option>`;
    });
}

function addToBill() {
    const productId = document.getElementById('product-select').value;
    const quantity = parseInt(document.getElementById('bill-quantity').value);
    
    if (!productId || quantity <= 0) {
        alert('Please select a product and enter a valid quantity');
        return;
    }
    
    const product = inventory.find(p => p.id == productId);
    if (!product) {
        alert('Product not found');
        return;
    }
    
    if (quantity > product.quantity) {
        alert(`Only ${product.quantity} items available in stock`);
        return;
    }
    
    // Check if product already in bill
    const existingItem = billItems.find(item => item.productId == productId);
    if (existingItem) {
        if (existingItem.quantity + quantity > product.quantity) {
            alert(`Cannot add more. Total would exceed available stock (${product.quantity})`);
            return;
        }
        existingItem.quantity += quantity;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        billItems.push({
            productId: product.id,
            name: product.name,
            brand: product.brand,
            size: product.size,
            price: product.sellingPrice,
            quantity: quantity,
            total: quantity * product.sellingPrice,
            image: product.image
        });
    }
    
    updateBillDisplay();
    document.getElementById('bill-quantity').value = 1;
}

function updateBillDisplay() {
    const billItemsDiv = document.getElementById('bill-items');
    const billTotal = document.getElementById('bill-total');
    
    if (billItems.length === 0) {
        billItemsDiv.innerHTML = '<p class="text-gray-500 text-sm">No items added</p>';
        billTotal.textContent = '0.00';
        return;
    }
    
    billItemsDiv.innerHTML = billItems.map((item, index) => `
        <div class="flex gap-3 items-center bg-gray-50 p-3 rounded">
            ${item.image ? `
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded border">
            ` : `
                <div class="w-12 h-12 bg-gray-200 rounded border flex items-center justify-center">
                    <span class="text-gray-400 text-xs">📷</span>
                </div>
            `}
            <div class="flex-1">
                <p class="font-medium text-sm">${item.name} - ${item.brand} (${item.size})</p>
                <p class="text-xs text-gray-600">${item.quantity} × $${item.price.toFixed(2)}</p>
            </div>
            <div class="text-right">
                <p class="font-medium">$${item.total.toFixed(2)}</p>
                <button onclick="removeFromBill(${index})" class="text-red-600 hover:text-red-800 text-xs">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = billItems.reduce((sum, item) => sum + item.total, 0);
    billTotal.textContent = total.toFixed(2);
}

function removeFromBill(index) {
    billItems.splice(index, 1);
    updateBillDisplay();
}

function clearBill() {
    billItems = [];
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    updateBillDisplay();
    updateBillPreview();
}

function generateBill() {
    if (billItems.length === 0) {
        alert('Please add items to the bill');
        return;
    }
    
    const customerName = document.getElementById('customer-name').value || 'Walk-in Customer';
    const customerPhone = document.getElementById('customer-phone').value || 'N/A';
    
    // Update inventory
    billItems.forEach(item => {
        const product = inventory.find(p => p.id === item.productId);
        if (product) {
            product.quantity -= item.quantity;
        }
    });
    
    // Create sale record
    const sale = {
        id: Date.now(),
        billNumber: billCounter,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        customer: customerName,
        phone: customerPhone,
        items: [...billItems],
        total: billItems.reduce((sum, item) => sum + item.total, 0)
    };
    
    sales.push(sale);
    billCounter++;
    
    // Save to localStorage
    localStorage.setItem('shoeStoreInventory', JSON.stringify(inventory));
    localStorage.setItem('shoeStoreSales', JSON.stringify(sales));
    localStorage.setItem('billCounter', billCounter.toString());
    
    // Update bill preview
    updateBillPreview(sale);
    
    alert('Bill generated successfully!');
    
    // Clear current bill
    billItems = [];
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    updateBillDisplay();
    updateProductSelect();
}

function updateBillPreview(sale = null) {
    if (!sale && billItems.length === 0) {
        document.getElementById('bill-number').textContent = '-';
        document.getElementById('bill-date').textContent = '-';
        document.getElementById('preview-customer').textContent = '-';
        document.getElementById('preview-phone').textContent = '-';
        document.getElementById('preview-items').innerHTML = '';
        document.getElementById('preview-total').textContent = '0.00';
        return;
    }
    
    const customerName = sale ? sale.customer : (document.getElementById('customer-name').value || 'Walk-in Customer');
    const customerPhone = sale ? sale.phone : (document.getElementById('customer-phone').value || 'N/A');
    const items = sale ? sale.items : billItems;
    const total = sale ? sale.total : billItems.reduce((sum, item) => sum + item.total, 0);
    
    document.getElementById('bill-number').textContent = sale ? sale.billNumber : billCounter;
    document.getElementById('bill-date').textContent = sale ? sale.date : new Date().toLocaleDateString();
    document.getElementById('preview-customer').textContent = customerName;
    document.getElementById('preview-phone').textContent = customerPhone;
    document.getElementById('preview-total').textContent = total.toFixed(2);
    
    document.getElementById('preview-items').innerHTML = `
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b">
                    <th class="text-left py-1">Item</th>
                    <th class="text-center py-1">Qty</th>
                    <th class="text-right py-1">Price</th>
                    <th class="text-right py-1">Total</th>
                </tr>
            </thead>
            <tbody>
                ${items.map(item => `
                    <tr>
                        <td class="py-1">${item.name} - ${item.brand} (${item.size})</td>
                        <td class="text-center py-1">${item.quantity}</td>
                        <td class="text-right py-1">$${item.price.toFixed(2)}</td>
                        <td class="text-right py-1">$${item.total.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function printBill() {
    window.print();
}

// Reports functionality
function updateReports() {
    // Total products
    document.getElementById('report-total-products').textContent = inventory.length;
    
    // Total sales
    const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);
    document.getElementById('report-total-sales').textContent = totalSales.toFixed(2);
    
    // Low stock items
    const lowStockItems = inventory.filter(product => product.quantity <= 5);
    document.getElementById('report-low-stock').textContent = lowStockItems.length;
    
    // Low stock list
    const lowStockList = document.getElementById('low-stock-list');
    if (lowStockItems.length === 0) {
        lowStockList.innerHTML = '<p class="text-gray-500">No low stock items</p>';
    } else {
        lowStockList.innerHTML = lowStockItems.map(product => `
            <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div class="flex gap-3 items-center">
                    ${product.image ? `
                        <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded border">
                    ` : `
                        <div class="w-12 h-12 bg-gray-200 rounded border flex items-center justify-center">
                            <span class="text-gray-400 text-xs">📷</span>
                        </div>
                    `}
                    <div>
                        <p class="font-medium text-red-800">${product.name} - ${product.brand}</p>
                        <p class="text-sm text-red-600">Size ${product.size}</p>
                    </div>
                </div>
                <span class="bg-red-200 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    ${product.quantity} left
                </span>
            </div>
        `).join('');
    }
    
    // Recent sales
    const recentSales = sales.slice(-5).reverse();
    const recentSalesList = document.getElementById('recent-sales-list');
    if (recentSales.length === 0) {
        recentSalesList.innerHTML = '<p class="text-gray-500">No recent sales</p>';
    } else {
        recentSalesList.innerHTML = recentSales.map(sale => `
            <div class="p-3 bg-green-50 rounded-lg">
                <div class="flex justify-between items-start">
                    <div>
                        <p class="font-medium text-green-800">Bill #${sale.billNumber}</p>
                        <p class="text-sm text-green-600">${sale.customer}</p>
                        <p class="text-xs text-gray-600">${sale.date} ${sale.time}</p>
                    </div>
                    <span class="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        $${sale.total.toFixed(2)}
                    </span>
                </div>
            </div>
        `).join('');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayInventory();
    updateProductSelect();
    updateBillDisplay();
    updateBillPreview();
    updateReports();
});

// Update bill preview when customer info changes
document.getElementById('customer-name').addEventListener('input', updateBillPreview);
document.getElementById('customer-phone').addEventListener('input', updateBillPreview);