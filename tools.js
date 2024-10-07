const tools = [
    {
        name: "Tool One",
        description: "A brief description of Tool One.",
        pageUrl: "Html Viewer.html"  // Change this to the actual file path
    },
    {
        name: "Tool Two",
        description: "A brief description of Tool Two.",
        pageUrl: "ToolTwo.html"  // Assuming ToolTwo.html is the local file
    },
    {
        name: "Tool Three",
        description: "A brief description of Tool Three.",
        pageUrl: "ToolThree.html"
    },
    {
        name: "Tool Four",
        description: "A brief description of Tool Four.",
        pageUrl: "ToolFour.html"
    },
    {
        name: "Tool Five",
        description: "A brief description of Tool Five.",
        pageUrl: "ToolFive.html"
    },
    {
        name: "Tool Six",
        description: "A brief description of Tool Six.",
        pageUrl: "ToolSix.html"
    },
    {
        name: "Tool Seven",
        description: "A brief description of Tool Seven.",
        pageUrl: "ToolSeven.html"
    },
    {
        name: "Tool Eight",
        description: "A brief description of Tool Eight.",
        pageUrl: "ToolEight.html"
    },
    {
        name: "Tool Nine",
        description: "A brief description of Tool Nine.",
        pageUrl: "ToolNine.html"
    },
    {
        name: "Tool Ten",
        description: "A brief description of Tool Ten.",
        pageUrl: "ToolTen.html"
    }
];

function renderTools() {
    const toolsContainer = document.getElementById('tools-container');

    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.pageUrl}" target="_blank">Open ${tool.name}</a>
        `;
        toolsContainer.appendChild(toolElement);
    });
}

document.addEventListener('DOMContentLoaded', renderTools);
