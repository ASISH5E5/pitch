{/* Intro Slide Data types */}

export interface IntroSlideProps {
  setSelectedSlide: (slide: string) => void;
}
export interface IntroSlideContent {
  title: string;
  subtitle: string;
}

export interface IntroSlideData {
  IntroSlide: {
    content: IntroSlideContent[];
  };
}

{/*ProblemSlide datatypes */}

export interface problemtype{
  problem:string
}

// src/Interfaces/Interfaces.ts
export interface KeyStat {
  text: string | React.ReactNode;
  source: string | React.ReactNode;
  link: string;
}

export interface BottomStat {
  text: string;
  source: string;
  link: string;
}

export interface ProblemSlideData {
  problem: string;
  keyStats: KeyStat[];
  bottomStat: BottomStat[];
}



{/* Solution Slide datatypes*/}


export interface solutiontype{
  solution:string
}


export interface Feature {
  icon: string;
  title: string;
  solution: string;
  color: string;
}

export interface ImpactArea {
  icon: string;
  metric: string;
  traditional: string;
  enligence: string;
  improvement: string;
  color: string;
}

  export interface SolutionSlideData {
    solutiontype:string;
    features: Feature[]; 
    impactAreas: ImpactArea[]; 
  }
  


  {/* Team Slide datatypes*/}
  export interface Institution {
    logo: string;
    name: string;
  }
  
  export interface FounderData {
    name: string;
    title: string;
    tagline: string;
    keySkills: string[];
    image: string;
    linkedin: string;
  }
  export interface CarouselProps {
    items: Institution[];
    currentIndex: number;
    setIndex: (value: number | ((prev: number) => number)) => void;
    icon: React.ReactNode;
    title: string;
  }
  
 export interface FounderProfileProps {
    data: FounderData;
    align: 'left' | 'right';
  }
  
  
  
  export interface Founders {
    left: FounderData;
    right: FounderData;
  }
  
  
  export interface CarouselItem {
    title: string; 
    icon: string; // Icon name for the carousel (e.g., "GraduationCap")
    data: Institution[]; // Array of institutions or companies
  }
  
  


  export interface TeamSlideData {
    founders: Founders; // Information about the team founders
    educationalInstitutions: Institution[]; // List of educational institutions
    companies: Institution[]; // List of companies
  }
  
{/* MarketSlide datatypes*/}
  interface MarketBreakdown {
    name: string;
    value: number;
    details: string;
  }
  
  interface MarketSegment {
    total: number;
    breakdown: MarketBreakdown[];
  }
  
  export interface MarketDataType {
    tam: MarketSegment;
    sam: MarketSegment;
    som: MarketSegment;
  }
  
  // Define type for the active segment
  export type MarketSegmentKey = 'tam' | 'sam' | 'som';
  
  // Define types for the assumptions
  export interface AssumptionsType {
    tam: string[];
    sam: string[];
    som: string[];
  }
  
  // Define types for funnel data
  
  
  // Add details for Ideal Customer Profile (ICP) and Learning & Development (L&D) Points
  export interface MarketSlideData {
    marketData: MarketDataType; // TAM, SAM, SOM data
    assumptions: AssumptionsType; // Assumptions for TAM, SAM, SOM
    // Data for the funnel chart
    icpPoints: string[]; // ICP points
    ldPoints: string[];  // Learning & Development points
  }
  export interface FunnelDataItem {
    name: string;
    value: number;
    fill: string;
    width?: string;
  }
  
  // Define types for CustomTooltip props
  export interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        value: number;
      };
    }>;
  }
  

  // Updated Interfaces

  {/* GTM Slide datatypes*/}
export interface BaseStrategy {
  icon: string; // Change from Element to string
  title: string;
}

export interface SimpleStrategy extends BaseStrategy {
  points: string[];
}

export interface MarketingStrategy extends BaseStrategy {
  corporate: string[];
  individual: string[];
}

export interface PhasesStrategy extends BaseStrategy {
  phase1: {
    title: string;
    goals: string[];
  };
  phase2: {
    title: string;
    goals: string[];
  };
}

export interface MetricsStrategy extends BaseStrategy {
  enterprise: string[];
  individual: string[];
}

export interface Strategies {
  entry: SimpleStrategy;
  distribution: SimpleStrategy;
  marketing: MarketingStrategy;
  phases: PhasesStrategy;
  metrics: MetricsStrategy;
}
{/*Traction Slide Interfaces*/ }
import { JSX } from 'react';

// Interface for a single metric
export interface Metric {
  icon: JSX.Element;
  label: string;
  value: string;
  subtext?: string;
  valueUSD?: string;
  valueINR?: string;
}

// Interface for a single client
export interface Client {
  name: string;
  logo: string;
}

// Interface for a journey step
export interface JourneyStep {
  title: string;
  description: string;
  details?: string;
  highlight?: string;
  active?: boolean;
}

// Define the interface for the data used in the component
export interface TractionSlideData {
  metrics: Metric[];
  financialMetrics: Metric[];
  journeySteps: JourneyStep[];
  clients: Client[];
  ITEMS_PER_SLIDE: number;
}
{/*Our Slide DataTypes*/ }

// Interface for allocation data in the pie chart
export interface AllocationData {
  name: string;
  value: number;
  icon: JSX.Element;
  details: string[];
}

// Interface for a milestone target
export interface MilestoneTarget {
  metric: string;
  target: string;
  icon: JSX.Element;
}

// Interface for the milestones section
export interface Milestones {
  targets: MilestoneTarget[];
  timeline: string;
  nextRound: {
    amount: string;
    requirements: string[];
  };
}

// Interface for the CustomTooltip props
export interface OurSlideDataTypes {
  active?: boolean;
  payload?: Array<{
    payload: {
      icon: JSX.Element;
      name: string;
      value: number;
      details: string[];
    };
  }>;
}
// Competitor interface defines the structure of a competitor
export interface Competitor {
  name: string;
  type: string;
  founded: number;
  funding: string;
  region: string;
  strengths: string;
  weaknesses: string;
}


// FeatureSupport interface defines support for each feature by company
export interface FeatureSupport {
  [key: string]: boolean;  // Company name as key and a boolean to indicate support for that feature
}

// Features1 interface defines features with the support data for each company
export interface Features1 {
  [key: string]: FeatureSupport;  // Feature name as key with its corresponding support data
}

// SWOTAnalysis interface defines the structure of SWOT analysis for a company
export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// LMSDashboardData interface includes the full data for the LMS dashboard
export interface LMSDashboardData {
  allCompetitors: Competitor[];
  features: Features1;  // Feature data
  swotAnalysis: SWOTAnalysis;  // SWOT data
}
