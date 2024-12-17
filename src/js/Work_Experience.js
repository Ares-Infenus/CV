document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const descriptionElement = document.querySelector('#Title.Description');
    const timelineElement = document.querySelector('#TimeLine.Description');
    const resumeElement = document.querySelector('#Resume.Description');
    const logrosElement = document.querySelector('#Logros.Work_content');
    const trabajoElement = document.querySelector('#Content_trabajo_1.Index');
    
    // Contenido del trabajo
    const jobDescription = {
        title: "Imperio del Plástico",
        timeline: "2023-june - 2024-june",
        resume: ["During a family economic crisis, I assumed leadership of our company, overcoming obstacles and ensuring its stability. This experience taught me to make decisions under pressure, turn adversity into opportunities and strengthen my leadership and resilience skills."],
        logros: [
            "❖ Led data analytics implementation, optimizing financial and operational processes."  ,
            "❖ Gained expertise in finance and data analysis, driving strategic decisions",
            "❖ Introduced innovative technologies, boosting efficiency and revenues.",  
            "❖ Co-founded and launched a profitable grill factory.",
            "❖ Achieved a 13% monthly revenue increase through data-driven strategies."
        ]
    };

    // Función para mostrar la descripción completa
    function showDescription() {
        // Crear el contenido HTML para cada sección
        const descriptionHTML = `
            <div class="job-title">${jobDescription.title}</div>
        `;
        
        const timelineHTML = `
            <div class="timeline">${jobDescription.timeline}</div>
        `;
        
        const resumeHTML = `
            <div class="resume">${jobDescription.resume}</div>
        `;
        
        const logrosHTML = `
            <ul class="logros">
                ${jobDescription.logros.map(logro => `<li>${logro}</li>`).join('')}
            </ul>
        `;
        
        // Actualizar el contenido de los elementos
        descriptionElement.innerHTML = descriptionHTML;
        timelineElement.innerHTML = timelineHTML;
        resumeElement.innerHTML = resumeHTML;
        logrosElement.innerHTML = logrosHTML;

        // Hacer visibles los elementos
        descriptionElement.classList.add('visible');
        timelineElement.classList.add('visible');
        resumeElement.classList.add('visible');
        logrosElement.classList.add('visible');
    }

    // Agregar el evento de click
    trabajoElement.addEventListener('click', showDescription);
});
