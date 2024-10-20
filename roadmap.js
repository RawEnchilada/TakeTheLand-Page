
const roadmapData = [
    {
        "date": "Q4 2024",
        "icon": "fa-flask",
        "name": "Start Internal Game Testing",
        "steps": [
            { "name": "Create the website", "status": "done", "icon": "fa-mobile" },
            { "name": "Basic roguelike mode", "status": "inprogress", "icon": "fa-flag" },
            { "name": "Working game server", "status": "inprogress", "icon": "fa-server" },
            { "name": "Initial factions introduced", "status": "done", "icon": "fa-users" },
        ]
    },
    {
        "date": "Q1 2025",
        "icon": "fa-rocket",
        "name": "Early Access Launch",
        "steps": [
            { "name": "Release core game on Android", "status": "todo", "icon": "fa-mobile" },
            { "name": "Create at least 40 cards", "status": "inprogress", "icon": "fa-clipboard-list" },
            { "name": "Roguelike mode finished", "status": "inprogress", "icon": "fa-flag" },
            { "name": "Google integration", "status": "todo", "icon": "fa-g" },
            { "name": "Advanced AI opponents", "status": "todo", "icon": "fa-robot" },
        ]
    },
    {
        "date": "Q2 2025",
        "icon": "fa-shield",
        "name": "'Fight Me!' update",
        "steps": [
            { "name": "New game mode: 'Duel'", "status": "todo", "icon": "fa-chess" },
            { "name": "Cosmetics", "status": "todo", "icon": "fa-paint-brush" }
        ]
    },
    {
        "date": "Q3 2025",
        "icon": "fa-users",
        "name": "'Not My Friend' update",
        "steps": [
            { "name": "Duel with friends", "status": "todo", "icon": "fa-handshake" },
            { "name": "Manage friends", "status": "todo", "icon": "fa-heart" }
        ]
    },
    {
        "date": "Q3.5 2025",
        "icon": "fa-otter",
        "name": "'Like The Others' update",
        "steps": [
            { "name": "Unique Cards", "status": "todo", "icon": "fa-star" },
            { "name": "More cards", "status": "todo", "icon": "fa-shopping-cart" },
            { "name": "More cosmetics", "status": "todo", "icon": "fa-paint-brush" },
        ]
    },
    {
        "date": "Q4 2025",
        "icon": "fa-globe",
        "name": "Full Release - 'Conquest' update",
        "steps": [
            { "name": "New game mode: 'Conquest'", "status": "todo", "icon": "fa-gamepad" },
            { "name": "Seasonal content", "status": "todo", "icon": "fa-gift" },
            { "name": "Polish, and balancing", "status": "todo", "icon": "fa-paint-brush" },
        ]
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement('div');
    container.classList.add('roadmap-container');
    document.querySelector('.content').appendChild(container);

    roadmapData.forEach((milestone, index) => {
        // Create milestone block
        const milestoneBlock = document.createElement('div');
        milestoneBlock.classList.add('milestone');

        // Create timeline node
        const timelineNode = document.createElement('div');
        timelineNode.classList.add('timeline-node');

        // Create node circle
        const nodeCircle = document.createElement('div');
        nodeCircle.classList.add('timeline-node-circle');

        // Add date to timeline node
        const dateSpan = document.createElement('span');
        dateSpan.textContent = milestone.date;

        // Append date and circle to timeline node
        timelineNode.appendChild(dateSpan);
        timelineNode.appendChild(nodeCircle);

        // Create milestone content container
        const milestoneContent = document.createElement('div');
        milestoneContent.classList.add('milestone-content');

        // Create milestone header
        const milestoneHeader = document.createElement('div');
        milestoneHeader.classList.add('milestone-header');
        milestoneHeader.innerHTML = `
                <i class="fa ${milestone.icon}"></i> 
                <span>${milestone.name}</span>
            `;

        // Create steps container
        const stepsContainer = document.createElement('div');
        stepsContainer.classList.add('steps-container');
        milestone.steps.forEach(step => {
            const stepItem = document.createElement('div');
            stepItem.classList.add('step');
            stepItem.classList.add(step.status);
            stepItem.innerHTML = `
                    <i class="fa ${step.icon}"></i>
                    <span>${step.name}</span>
                `;
            stepsContainer.appendChild(stepItem);
        });

        // Append elements
        milestoneContent.appendChild(stepsContainer);
        milestoneContent.appendChild(milestoneHeader);

        milestoneBlock.appendChild(timelineNode);
        milestoneBlock.appendChild(milestoneContent);

        container.appendChild(milestoneBlock);
    });

    // Add a vertical line representing the timeline
    const timelineLine = document.createElement('div');
    timelineLine.classList.add('timeline-line');
    container.appendChild(timelineLine);
});