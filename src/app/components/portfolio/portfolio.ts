import { Component, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

interface Project {
  title: string;
  category: string;
  description: string;
  features?: string[];
  image: string;
  technologies: string[];
  link: string;
  glowClass: string;
  badgeClass: string;
  isProprietary: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent implements AfterViewInit {
  // Converted filter target to Signal to maximize performance metrics
  activeFilter = signal('All');

  projects: Project[] = [
    {
      title: 'LEARNOPOLY - Interactive Educational Platform',
      category: 'Game Development',
      description: 'An advanced interactive gamified platform engineered in Unity to transform classroom curriculum delivery through explicit turn-based gameplay, state evaluation tracking, and real-time student performance feedback loop mechanics.',
      features: [
        'Dynamic Question Administration: Provides full master control parameters for instructors to create, modify, or partition question banks by targeted units, grade sets, and Depth of Knowledge (DOK) metrics.',
        'Multi-Player Turn Matrix: Built-in logical tracking loop supporting up to 7 collaborative student teams in synchronized turn-based gameplay.',
        'Algorithmic Smart Tiles: Features a responsive board matrix coordinating dedicated City Tiles, strategic penalties with turn-skipping logic, and recovery mechanics.',
        'Native Arabic Input Engine: Fully localized Right-to-Left (RTL) interface compatibility including automated font shaping engines designed for local environments.',
        'Image-Rich Media Ingestion: Integrated background asset systems enabling instructors to attach complex diagram models, engineering shapes, or visual math puzzles directly into query canvases.'
      ],
      image: 'assets/UnityGame/1.png',
      technologies: ['C# Programming', 'Unity Engine', 'OOP Architecture', 'JSON Data Systems'],
      link: 'https://example.com/game',
      glowClass: 'purple-glow',
      badgeClass: 'badge-purple',
      isProprietary: true
    },
    {
        title: 'Dynamic Angular Portfolio Platform',
        category: 'Web Development',
        description: 'Architected and implemented this modular, highly scalable single-page responsive portfolio application entirely from scratch to showcase engineering solutions and automated software architectures.',
        features: [
          'Reactive State Filtering: Leveraging efficient data tracking loop systems to execute instantaneous, flicker-free project filtering without page reloads.',
          'Premium Glassmorphic Design: Fully customized advanced CSS design engine layered with backdrop-blur filters, giving complete thematic continuity with your CV.',
          'Optimized Component Architecture: Built entirely using modern standalone Angular structures, eliminating unnecessary module bloat for hyper-fast initial load speeds.',
          'Aesthetic Lighting Engines: Custom hover-physics matrix mapped to coordinate six distinct drop-shadow neon glows and micro-translations.',
          'Robust Image Fallback Loop: Bulletproof error-handling interceptors (`onerror`) that smoothly swap broken or missing image paths into clean, structural placeholder graphics.',
          'Entrance Coordination: Native lifecycle synchronization that refreshes Animate On Scroll (AOS) libraries accurately, tracking layout boundaries during sorting changes.'
        ],
        image: 'assets/AngularPortfolio/1.png',
        technologies: ['Angular 18', 'Bootstrap Layouts', 'Advanced CSS', 'TypeScript'],
        link: 'https://github.com/your-username/yazan-portfolio',
        glowClass: 'teal-glow',
        badgeClass: 'badge-teal',
        isProprietary: false
    },
        {
          title: 'Autodesk Workflow Automation Suite',
          category: 'Engineering Tools',
          description: 'An advanced C# .NET desktop ribbon extension engineered for Autodesk Revit to eliminate core design bottlenecks, optimize manual documentation loops, and handle multi-layer drawing extractions.',
          features: [
            'Batch Document Exporting: Programmatic sheet translation to clear PDF formatting.',
            'CAD Output Processing: Automated batch conversion of active structural sheets to DWG configurations.',
            'Data-Driven Sheet Creation: Automated external initialization pipelines to generate Revit drawing sheets directly from Excel matrices.',
            'Bulk Revision Controls: Programmatically mapping and synchronizing selected revision tags across target project sheets simultaneously.',
            'Title Block Extraction Engines: Mass element filtering to instantly query and grab all structural title blocks on targeted drawing sheets.',
            'Hidden Canvas Identification: Filtered selection scripts to instantly isolate and pick hidden workspace parameters.',
            'Spatial Boundary Mapping: Specialized localized element queries to scan, isolate, and filter active room layers.',
            'Automated Initialization Worksets: Instantly auto-generates structural workset layers directly from arrays of common standard naming strings.'
          ],
          image: 'assets/RevitAutomation/1.png',
          technologies: ['C#/.NET', 'Revit API', 'Dynamo BIM', 'Data Extraction'],
          link: '',
          glowClass: 'blue-glow',
          badgeClass: 'badge-blue',
          isProprietary: true
        },

    {
      title: 'Delivery Dash - Logistics Simulation',
      category: 'Game Development',
      description: 'A top-down 2D driving and neighborhood package distribution arcade game exploring material pickup mechanics, inertia matrices, and dynamic terrain interaction filters.',
      features: [
        'Package Distribution Loop: Scripted rigid trigger volumes managing multi-stage package collections and customer delivery drop zone states.',
        'Obstacle Momentum Degradation: Implemented full structural 2D rigidbodies on residential houses and fencing assets to dynamically degrade vehicle speed upon collision.',
        'Dynamic Mud Friction Dampening: Configured layered coordinate queries that instantly scale down vehicle max velocity profiles whenever crossing mud-patch terrain markers.'
      ],
      image: 'assets/images/1.png',
      technologies: ['C# Scripting', 'Unity 2D Physics', 'Trigger Matrices', 'Velocity Filtering'],
      link: 'https://github.com/yazan2ayoub/delivery-dash',
      glowClass: 'purple-glow',
      badgeClass: 'badge-purple',
      isProprietary: false
    },
    {
      title: 'Snow Surfer - Physics-Based Trick Engine',
      category: 'Game Development',
      description: 'A side-scrolling physics simulation built around mid-air angular momentum, rotation multipliers, and stringent ground landing safety thresholds.',
      features: [
        'Airborne Rotation Scoring: Created a specialized score tracker running real-time calculations to award points based on completed forward or backward 360-degree flips.',
        'Arrow-Key Input Optimization: Fully synchronized horizontal and vertical button inputs directly with the main player rigidbody to manipulate angular torque mid-air.'
      ],
      image: 'assets/images/2.png',
      technologies: ['C# Engine Code', 'Angular Momentum', 'Fail-State Triggers', 'UI Selection'],
      link: 'https://github.com/yazan2ayoub/Snow-Surfer---Physics-Based-Trick-Engine',
      glowClass: 'purple-glow',
      badgeClass: 'badge-purple',
      isProprietary: false
    },
    {
      title: 'Tilevenia - Modular 2D Platformer',
      category: 'Game Development',
      description: 'A classic 2D retro action platformer starring "Bronzo," featuring fully integrated sprite animation controllers, localized audio triggers, and highly scalable grid palettes.',
      features: [
        'Master Grid Tilemaps: Architected maps using uniform Unity Tilemap grids with pre-programmed collision parameters for rapid environment layout building.',
        'Ranged Action Combat: Coded an instantaneous projectile instantiation script letting Bronzo shoot down attacking environmental enemy entities.'
      ],
      image: 'assets/images/3.png',
      technologies: ['Unity Tilemaps', 'Animation States', 'HUD Tracking', 'Modular Architecture'],
      link: 'https://github.com/yazan2ayoub/Tilevenia---Modular-2D-Platformer',
      glowClass: 'purple-glow',
      badgeClass: 'badge-purple',
      isProprietary: false
    },
    {
      title: 'Starblast - Arcade Space Shooter',
      category: 'Game Development',
      description: 'An endless vertical space-shooter application featuring procedural enemy wave spawning arrays, scaling structural difficulty, and full asset destruction tracking.',
      features: [
        'Parallax Space Backdrops: Multi-layered background canvases moving proportionally to spaceship velocity to create immersive interstellar depth.',
        'Procedural Spawning Waves: Programmed an infinite spawn controller loop that incrementally scales difficulty parameters, enemy quantities, and fire-rates per consecutive wave.'
      ],
      image: 'assets/images/4.png',
      technologies: ['Procedural Loops', 'Parallax Scrolling', 'State Destruction', 'Array Spawners'],
      link: 'https://github.com/yazan2ayoub/Starblast---Arcade-Space-Shooter',
      glowClass: 'purple-glow',
      badgeClass: 'badge-purple',
      isProprietary: false
    },

      {
        title: 'NFS Project',
        category: 'Civil Engineering',
        description: 'Executed cross-functional responsibilities across Site Engineering and Technical Engineering during the Design and Build phases of the Early Site Works to deliver comprehensive earthworks, road networks, and critical utility lines.',
        features: [
          'Value Engineering Pipeline Redesign: Proposed and engineered an alternative profile routing tracking the Future Ground Level (FGL), which averaged 1.5m above existing ground levels.',
          'Subsurface Risk Mitigation: Elevating the routing embankment minimized complex structural utility crossings with pre-existing buried lines across the corridor.',
          'Cost & Timeline Optimization: Drastically reduced hard rock excavation quantities and completely eliminated expensive trench dewatering setups, accelerating the pipe-laying critical path.',
          'Fluid Dynamics Optimization: Modelled custom profile geometry to minimize pipeline up-and-down coordinates, successfully reducing potential air lock locations and lowering the required count of air release valves.',
          'Technical Package Engineering: Developed a systematic approach to author and manage 140 custom Technical Packages containing detailed design drawings, job safety analyses (JSAs), and method statements to timely secure mandatory client work permits.',
          'Data-Driven Progress Analytics: Launched localized color-coded tracker logs, progress bar charts, management dashboards, and rundown curves to actively monitor progress lifecycles and facilitate weekly interface coordination meetings with client stakeholders.',
          'Earthwork Conversion: Re-engineered site logistics by processing raw surplus excavation material into certified structural Type-A fill directly via on-site crushing setups, completely eliminating the environmental and financial costs of external quarry imports for Lot-W8.',
          'Resource Circularity & Site Safety: Designed a closed-loop system to collect and reuse dewatering discharge from underground tank excavations for site dust control to preserve fresh water, while adding a protective structural barricade ring around active high-capacity mobile crushers.'
        ],
        image: 'assets/NFS/1.png',
        technologies: ['QE-LNG Standards', 'HDPE Pipelines', 'Site & Technical Eng.', 'Value Engineering'],
        link: '',
        glowClass: 'green-glow',
        badgeClass: 'badge-green',
        isProprietary: true
      },
    {
      title: 'West Bay North parks & Roads',
      category: 'Civil Engineering',
      description: 'Supervised direct field engineering and construction management routines for a major prime coastal urban corridor under aggressive fast-tracked readiness schedules.',
      features: [
        'Critical Utility Shutdown Execution: Supervised and successfully completed a high-stakes, complex 7-point Potable Water (PW) utility network shutdown in an accelerated timeline window of only 6 hours.',
        'Accelerated Urban Corridor Reconstruction: Managed the complete structural renovation and civil beautification of a 570m major boulevard footprint within an aggressive 75-day delivery window.'
      ],
      image: 'assets/WestBay/1.png',
      technologies: ['Ashghal Specifications', 'PW Networks', 'Corridor Renovation', 'Manpower Leadership'],
      link: '',
      glowClass: 'orange-glow',
      badgeClass: 'badge-orange',
      isProprietary: true
    },
    {
      title: 'Hamad Port Strategic Food Security Facility',
      category: 'Civil Engineering',
      description: 'Completed comprehensive engineering training operations on a landmark industrial base, leading site coordination loops across heavy subsurface utilities and terminal security structures.',
      features: [
        'LPG Subsurface System Supervision: Managed on-site construction oversight, installation parameters, and trench alignments for an underground Liquefied Petroleum Gas (LPG) storage tank array and its structural utility network.',
        'Heavy Building Structural Delivery: Supervised the civil delivery and field coordination loops for 3 adjacent high-security control and terminal protection facilities.'
      ],
      image: 'assets/HamadPort/1.png',
      technologies: ['Heavy Subsurface Utilities', 'LPG Storage Tanks', 'QA/QC Client Handovers', 'Industrial Site Safety'],
      link: '',
      glowClass: 'red-glow',
      badgeClass: 'badge-red',
      isProprietary: true
    }
  ];

  // Computational Computed Signal to process pipeline sorting with maximum efficiency
  filteredProjects = computed(() => {
    const active = this.activeFilter();
    if (active === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === active);
  });

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.init({
        duration: 750,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false
      });
      AOS.refresh();
    }, 100);
  }

  // Native CSS View Transitions Trigger Execution Engine
  setFilter(category: string) {
    const doc = document as any;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        this.activeFilter.set(category);
      });
    } else {
      this.activeFilter.set(category);
    }

    // Refresh scroll triggers after animations settle down
    setTimeout(() => { AOS.refresh(); }, 850);
  }

  // Generates valid, string-sanitized morph tracking tags for elements
  getTransitionName(title: string): string {
    return 'project-' + title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }
}