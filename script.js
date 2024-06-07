const checklist = document.getElementById('checklist');
const exportBtn = document.getElementById('exportBtn');

const stages = [
	"Can you do it?",
	"Does anyone want it?",
	"Can you make money?",
	"Show me you can do it.",
	"Show me the market.",
	"Show me the economic feasibility.",
	"Beta-Ready MVP",
	"Strategic Marketing Plan",
	"Refining the Pitch",
	"Launch-Ready Product",
	"Market Launch",
	"Business Launch",
	"Production",
	"Sales & Distribution",
	"Business Growth"
];

// Generate checklist items
for (let i = 0; i < stages.length; i++) {
	const step = document.createElement('li');
	step.classList.add('step');

	const stepTitle = document.createElement('div');
	stepTitle.classList.add('step-title');
	stepTitle.textContent = `Stage ${i + 1}: ${stages[i]}`;
	step.appendChild(stepTitle);

	const subitems = document.createElement('ul');
	subitems.classList.add('subitems');

	if (i === 0) {
		const items = [{
				question: "What is the proposed product or service?",
				description: "Summarize your product or service."
			},
			{
				question: "Have you investigated the feasibility of creating your solution?",
				description: "Determine the technical hurdles to developing the desired solution."
			},
			{
				question: "Have you researched related technologies, patents & copyrights?",
				description: "Research the U.S. Patent Office & Google Patents."
			},
			{
				question: "Have you discussed the topic with experts?",
				description: "Find out who can contribute to the technology or product development and why. Learn more about the technologies that apply to this solution."
			},
			{
				question: "Current state-of-the-art competitive solutions – What are they?",
				description: "Learn about alternative ways people solve the problem you're solving and what are other solutions on the market now."
			},
			{
				question: "Have you listed the main benefits you will bring to customers?",
				description: "Identify and focus on your competitive advantages."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 1) {
		const items = [{
				question: "Have you assessed the needs of the market?",
				description: "Conduct Customer Interviews - Find people who represent your target market. Interview them to understand the customer problem. Use that information to develop a solution that meets the needs they expressed and think about how to get it to them."
			},
			{
				question: "Do you know what value you bring to your customers vs just how the technology is different?",
				description: "Paint a clear picture of what your startup has to offer your customers."
			},
			{
				question: "Do you know the customer requirements?",
				description: "Uncover the customer needs through customer discovery."
			},
			{
				question: "Have you identified distribution channels?",
				description: "Identify which channels work best for your product."
			},
			{
				question: "Have you identified barriers to market entry?",
				description: "The obstacles that make it difficult for new companies to enter a given market - including technology challenges, government regulations, patents, start-up costs, or education and licensing requirements."
			},
			{
				question: "Have you explored revenue models?",
				description: "How are you going to receive revenue?"
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 2) {
		const items = [{
				question: "Have you estimated a Valley of Death forecast to launch your venture?",
				description: "As the business starts to develop its products, it incurs costs before it's able to generate revenue. This time period is called the \"Valley of Death.\" Forecasting the \"Valley of Death,\" can reveal the type and amount of capital a business needs to raise."
			},
			{
				question: "Does this venture appear to have profit potential?",
				description: "What's your objective? Expenses and projected sales?"
			},
			{
				question: "Do you have the right team to commercialize the product?",
				description: "Hiring a team for your startup. Have you really thought about the key elements of your business and how they match your team?"
			},
			{
				question: "Have you self-assessed your entrepreneurial aptitude?",
				description: "Evaluate your personal aptitude and personal circumstances at this time in your life. Are they well suited for this venture?"
			},
			{
				question: "Have you weighed the pros and cons of licensing to venturing?",
				description: "Is licensing the right option for you?"
			},
			{
				question: "Have you explored ways to protect your intellectual property?",
				description: "Determine the value of a patent, copyright, trade secret or other form of Intellectual Property protection to your business."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 3) {
		const items = [{
				question: "Have you determined the minimum performance criteria needed for an MVP?",
				description: "Understand your customers' basic needs for your solution. Basic functionality is the focus, without bells and whistles."
			},
			{
				question: "Do you have a design and schedule for producing a Minimally Viable Product (MVP)?",
				description: "Product Development Stage – developing the product MVP you've been researching."
			},
			{
				question: "Can you demonstrate your MVP to customers in some form?",
				description: "How will you test your MVP to target customers?"
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 4) {
		const items = [{
				question: "Have you examined long-term market dynamics/predictions/growth trends for your specific market?",
				description: "What market and other external factors (i.e., regulatory, etc.) will impact the market?"
			},
			{
				question: "Have you quantified, characterized, and prioritized the market segments?",
				description: "Everyone is not a customer! Focus on a target market or niche to improve competitiveness and market penetration."
			},
			{
				question: "Does your MVP have direct product validation from your target market?",
				description: "How did customers respond to your MVP? Analyze your customer feedback."
			},
			{
				question: "Have you determined your revenue model?",
				description: "Your revenue model gives you a necessary understanding of your cash flow and needs and is your way of demonstrating to yourself and to potential investors how you plan to price products and services, earn revenue, and maximize your marketing, sales, and profitability."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 5) {
		const items = [{
				question: "Have you developed a detailed Valley of Death Forecast?",
				description: "Refer to the Valley of Death created in Step 3. With information learned about the product, market and finances, refine your \"Valley of Death.\""
			},
			{
				question: "Have you explored the sensitivity of key financial assumptions?",
				description: "Sensitivity Analysis increases the credibility of your business model and is aimed to test the business model by considering changes of one or a combination of the variables."
			},
			{
				question: "Does the venture offer financial returns that justify investment?",
				description: "Investors will require a return on their investment at various levels based on the certain variables. Determine if your cash flow projections show that the business can generate enough revenue to provide proper ROI for investors."
			},
			{
				question: "Have you developed a pitch deck outlining the opportunity?",
				description: "A great pitch deck gets potential investors excited about your idea and engages them in a conversation about your business opportunity."
			},
			{
				question: "Have you started to form an advisory team?",
				description: "Finding the right advisors and engaging them in the right way can help you reduce risks, accelerate progress, and increase success."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 6) {
		const items = [{
				question: "Do you have an MVP sufficient for market trials? Can you learn from this iteration of the MVP?",
				description: "An MVP is the minimally viable product. It is the product version that has the most basic functionality. This is where you start. Identify your riskiest assumption, find the smallest possible experiment to test that assumption, and use the results of the experiment to course correct. – Y Combinator"
			},
			{
				question: "Have you conducted tests on the current MVP?",
				description: "The only way to find that out—the only way to test your assumptions—is to put your product in front of real users as quickly as possible. And when you do, you will often find that you must go back to the drawing board. In fact, you'll have to go back to the drawing board not just once, but over and over again. – Y Combinator"
			},
			{
				question: "Have you scoped your path to a full launch-ready MVP?",
				description: "Manage product development by analyzing processes at every stage through design, production, and selling."
			},
			{
				question: "Do you have the team or expertise to build the full launch-ready MVP?",
				description: "Determine the skills and expertise needed to develop the launch-ready MVP. If there are needs that your team does not provide, identify ways to fill in those gaps."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 7) {
		const items = [{
				question: "Have you defined your competitive advantages?",
				description: "Through MVP testing users to validate your assumptions about your key advantages. (Example: service levels, quality, branding, pricing, et cetera)."
			},
			{
				question: "Are you testing in target and niche markets?",
				description: "Be sure to test your product with users who are representative of your initial target market. Test with a specific group of potential customers."
			},
			{
				question: "Have you selected key product features at launch and at subsequent points?",
				description: "Based on customer discovery and feedback, determine which product features/benefits are the most valuable for your initial product launch, and then at subsequent points."
			},
			{
				question: "Are you testing your revenue model?",
				description: "Test revenue models to determine the best fit for your customers."
			},
			{
				question: "Are you testing marketing & distribution channels?",
				description: "Based on your customer discovery and feedback, determine which marketing & distribution channels you will test."
			},
			{
				question: "Are you documenting direct market feedback?",
				description: "Using a customer feedback loop to collect actionable customer feedback. Documenting, prioritizing and developing strategy based on that feedback."
			},
			{
				question: "Have you predicted competitors' responses?",
				description: "Keeping an eye on competitors by observing their marketing strategies, their potential steps, tracking every part of their promotions will keep you in the loop. Decide how competitors might react to your presence in the market. Prepare for the response."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
	} else if (i === 8) {
		const items = [{
				question: "Have you secured initial funding to start-up business activities?",
				description: "Determine how much capital you need to start your business. Explore funding options for your startup."
			},
			{
				question: "Are you refining your pitch deck for fundraising?",
				description: "Usually, a pitch deck is used to attract the interest of investors. A pitch deck tells the story of how the business came to be and what a profitable market opportunity it is."
			},
			{
				question: "Does your Valley of Death include the timing of present and future rounds of funding?",
				description: "Use the Valley of Death to forecast cash flow with funding. This will help you understand how/when you will need to plan on raising money."
			},
			{
				question: "Do you have the right organizational structure for your business?",
				description: "Make sure your business structure fits your plans and secure the proper registrations."
			},
			{
				question: "Can you ensure that management has critical experience and expertise in technology/product/market and business development?",
				description: "Well-rounded experience on the management team can help you expand your business in different ways. Investors invest in the right team to execute the business's strategies."
			},
			{
				question: "Have you selected a board of directors (or advisory team)?",
				description: "The purpose of a board is to provide help on specific challenges facing the company - strategy, fundraising, budgeting, growth, etc."
			},
			{
				question: "Have you finalized any intellectual property plans?",
				description: "IPs are patents, copyright and trademarks that protect you against competitors."
			},
			{
				question: "Have you developed a detailed plan for additional features and products?",
				description: "Product prioritization is important to creating a roll-out plan for new products and features."
			}
		];

		items.forEach(item => {
			const questionItem = document.createElement('li');
			questionItem.classList.add('question');

			const label = document.createElement('label');
			label.textContent = item.question;
			questionItem.appendChild(label);

			const textarea = document.createElement('textarea');
			textarea.placeholder = item.description;
			questionItem.appendChild(textarea);

			subitems.appendChild(questionItem);
		});
} else if (i === 9) {
	const items = [{
			question: "Do you have a launch-ready product?",
			description: "Launching your product is the best way to establish product fit and get feedback from customers."
		},
		{
			question: "Have you incorporated customer feedback into the product?",
			description: "Incorporating customer feedback into product research and development brings you closer to your target audience providing stronger customer retention, brand loyalty and engagement."
		}
	];

	items.forEach(item => {
		const questionItem = document.createElement('li');
		questionItem.classList.add('question');

		const label = document.createElement('label');
		label.textContent = item.question;
		questionItem.appendChild(label);

		const textarea = document.createElement('textarea');
		textarea.placeholder = item.description;
		questionItem.appendChild(textarea);

		subitems.appendChild(questionItem);
	});
} else if (i === 10) {
	const items = [{
			question: "Have you tested market channels?",
			description: "Testing market channels with clear goals help indicate if you are on the right track and making the right marketing impact."
		},
		{
			question: "Have you tested the revenue model?",
			description: "Fine tuning your revenue model with customer feedback and pivoting will help you make it repeatable for easier scaling."
		},
		{
			question: "Are you analyzing feedback from a systematic customer feedback mechanism?",
			description: "Customer feedback mechanisms are there to identify confusion or issues that could prevent customers from buying."
		},
		{
			question: "Are you analyzing your competitor's response?",
			description: "Look at competition as a source of information to analyze your market and be aware of how competitors might respond to new trends."
		},
		{
			question: "Have you incorporated marketing modifications into the market plan?",
			description: "Marketing mix refers to the combination of elements that shape how a business delivers value to its customers. These elements are called the 7Ps: Product, Price, Promotion, Place, People, Process, and Physical evidence. - AlexaBlog"
		},
		{
			question: "Have you established a process for prioritizing new business opportunities?",
			description: "Developing a forward-looking plan for growth and evolution of the organization from a long-term perspective."
		}
	];

	items.forEach(item => {
		const questionItem = document.createElement('li');
		questionItem.classList.add('question');

		const label = document.createElement('label');
		label.textContent = item.question;
		questionItem.appendChild(label);

		const textarea = document.createElement('textarea');
		textarea.placeholder = item.description;
		questionItem.appendChild(textarea);

		subitems.appendChild(questionItem);
	});
} else if (i === 11) {
	const items = [{
			question: "Have you revised your Valley of Death to include all current assumptions?",
			description: "Short term projections show you can deliver on milestones without running out of money while following a developed plan."
		},
		{
			question: "Have you secured funding after evaluating funding to match your Valley of Death?",
			description: "Determine needs for future growth."
		},
		{
			question: "Are you hiring and training core personnel?",
			description: "Hiring talent is one of the most critical functions of your business and understanding your needs can go a long way to landing the right fit."
		},
		{
			question: "Have you executed key contracts?",
			description: "Landing and successfully executing contracts or partnerships serves as validation for future customers and recruiting."
		},
		{
			question: "Have you scheduled regular board of director meetings?",
			description: "The purpose of a board is to help guide the company through strategic decisions that will impact the long term."
		},
		{
			question: "Have you developed key business operating policy and procedures?",
			description: "Start developing and thinking through key operational policies and procedures in your startups early life cycle."
		},
		{
			question: "Have you established financial control mechanisms?",
			description: "Establishing oversight processes or financial controls for your business helps you monitor and control how funds are being used to optimize efficiency."
		}
	];

	items.forEach(item => {
		const questionItem = document.createElement('li');
		questionItem.classList.add('question');

		const label = document.createElement('label');
		label.textContent = item.question;
		questionItem.appendChild(label);

		const textarea = document.createElement('textarea');
		textarea.placeholder = item.description;
		questionItem.appendChild(textarea);

		subitems.appendChild(questionItem);
	});
} else if (i === 12) {
	const items = [{
			question: "Do you have sufficient product support in place to support growth?",
			description: "Selling customer service as a core function and crafting exceptional customer support experiences, add value, brand loyalty and an edge on the competition."
		},
		{
			question: "Are you refining product features based on customer needs?",
			description: "Use product lifecycle and research techniques combined with customer feedback to anticipate which features will solve the problems facing your target audience."
		},
		{
			question: "Do you have a systematic process for exploring and prioritizing new features?",
			description: "Improving features or creating new ones through a well thought out product development process helps to ensure your team doesn't waste time and valuable resources."
		}
	];

	items.forEach(item => {
		const questionItem = document.createElement('li');
		questionItem.classList.add('question');

		const label = document.createElement('label');
		label.textContent = item.question;
		questionItem.appendChild(label);

		const textarea = document.createElement('textarea');
		textarea.placeholder = item.description;
		questionItem.appendChild(textarea);

		subitems.appendChild(questionItem);
	});
} else if (i === 13) {
	const items = [{
			question: "Are you maximizing productive sales channels?",
			description: "Examining current business status and comparing it to desired outcomes can help you identify gaps."
		},
		{
			question: "Are you systematically looking for expansion through new channels and new products/features?",
			description: "Developing a Market Entry Strategy for new products and features is an effective way to create the most value and identify a new niche target market."
		},
		{
			question: "Are you assessing customer satisfaction?",
			description: "Measuring customer satisfaction can identify customer loyalty, churn, and help forecast future growth."
		},
		{
			question: "Are you assessing partner satisfaction?",
			description: "Examining the strengths and weaknesses of your partnerships can help your team establish a more successful and collaborative partnership to drive growth."
		}
	];
items.forEach(item => {
   const questionItem = document.createElement('li');
   questionItem.classList.add('question');

   const label = document.createElement('label');
   label.textContent = item.question;
   questionItem.appendChild(label);

   const textarea = document.createElement('textarea');
   textarea.placeholder = item.description;
   questionItem.appendChild(textarea);

   subitems.appendChild(questionItem);
  });
  } else if (i === 14) {
  const items = [
   { question: "Have you assessed the needs of the market?", description: "Conduct Customer Interviews - Find people who represent your target market. Interview them to understand the customer problem. Use that information to develop a solution that meets the needs they expressed." }
  ];

  items.forEach(item => {
   const questionItem = document.createElement('li');
   questionItem.classList.add('question');

   const label = document.createElement('label');
   label.textContent = item.question;
   questionItem.appendChild(label);

   const textarea = document.createElement('textarea');
   textarea.placeholder = item.description;
   questionItem.appendChild(textarea);

   subitems.appendChild(questionItem);
  });
 } else { // i === 15
  const items = [
   { question: "Explanation for Q1 (Stage 15):", description: "Your answer for Q1" },
   { question: "Explanation for Q2 (Stage 15):", description: "Your answer for Q2" },
   { question: "Explanation for Q3 (Stage 15):", description: "Your answer for Q3" },
   { question: "Explanation for Q4 (Stage 15):", description: "Your answer for Q4" },
   { question: "Explanation for Q5 (Stage 15):", description: "Your answer for Q5" }
  ];

  items.forEach((item, index) => {
   const questionItem = document.createElement('li');
   questionItem.classList.add('question');

   const label = document.createElement('label');
   label.textContent = item.question;
   questionItem.appendChild(label);

   const inputField = document.createElement('input');
   inputField.type = 'text';
   inputField.placeholder = `Your answer for Q${index + 1}`;
   questionItem.appendChild(inputField);

   subitems.appendChild(questionItem);
  });
}
	step.appendChild(subitems);
	checklist.appendChild(step);
}

// Export to PDF functionality (using jsPDF library)
exportBtn.addEventListener('click', () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.getHeight(); // Get page height
  let y = 15;  // Initial vertical position, leaving space for margin

  // Main Title
  doc.setFontSize(18);
  doc.text('Startup Checklist', 10, y);
  y += 20;

  // Iterate through steps
  checklist.querySelectorAll('.step').forEach(step => {
    // Check if we need a new page
    if (y + 25 > pageHeight) {  // Estimate space needed for step & questions
      doc.addPage();
      y = 15; // Reset y position on new page
    }

    // Step Title
    doc.setFontSize(14);
    doc.text(step.querySelector('.step-title').textContent, 10, y);
    y += 10;

    // Iterate through questions
    step.querySelectorAll('.question').forEach(question => {
      const label = question.querySelector('label').textContent;
      const inputField = question.querySelector('input[type="text"], textarea');
      const value = inputField ? inputField.value : ''; // Handle no input

      // Question and answer (with page break check)
      if (y + 8 > pageHeight) {  // Estimate space for question/answer
        doc.addPage();
        y = 15; 
      }
      doc.setFontSize(12);
      doc.text(`${label}: ${value}`, 15, y);
      y += 8; 
    });
    y += 10; // Add space between steps 
  });

  doc.save('startup_checklist.pdf');
});
