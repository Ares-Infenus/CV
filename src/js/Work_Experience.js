document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de descripción
    const descriptionElement = document.querySelector('#Description.Work_content');
    
    // Obtener el elemento del trabajo
    const trabajoElement = document.querySelector('#Content_trabajo_1.Index');
    
    // Contenido de la descripción del trabajo
    const jobDescription = {
        title: "Imperio del Plástico",
        role: "Data Scientist",
        period: "2022 - Present",
        description: `Como Data Scientist en Imperio del Plástico, lideré varias iniciativas clave para optimizar operaciones y impulsar la toma de decisiones basada en datos:

        • Desarrollé e implementé modelos de machine learning para pronósticos de demanda, reduciendo costos de inventario en un 15%
        • Creé sistemas de reportes automatizados usando Python y PowerBI, ahorrando más de 20 horas de trabajo manual mensual
        • Construí y mantuve pipelines ETL para procesamiento de datos en tiempo real de múltiples fuentes
        • Colaboré con equipos multifuncionales para identificar y resolver desafíos empresariales usando análisis de datos
        • Implementé sistemas de control de calidad utilizando métodos de control estadístico de procesos`
    };

    // Función para mostrar la descripción
    function showDescription() {
        // Crear el contenido HTML
        const descriptionHTML = `
            <div class="job-title">${jobDescription.title}</div>
            <div class="job-role">${jobDescription.role}</div>
            <div class="job-period">${jobDescription.period}</div>
            <div class="job-description">${jobDescription.description}</div>
        `;
        
        // Actualizar el contenido
        descriptionElement.innerHTML = descriptionHTML;
        
        // Hacer visible la descripción
        descriptionElement.classList.add('visible');
    }

    // Agregar el evento de click
    trabajoElement.addEventListener('click', showDescription);
});