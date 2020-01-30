class SpaceAge {
  public seconds: number;

  constructor(time: number) {
    this.seconds = time;
  }

   onEarth(): number {
     const planet = new Earth(this.seconds);
     return +(planet as Planet).getPlanetAge();
   }

   onMercury(): number {
      const planet = new Mercury(this.seconds);
      return +(planet as Planet).getPlanetAge();
   }

   onVenus(): number {
      const planet = new Venus(this.seconds);
      return +(planet as Planet).getPlanetAge();
   }

   onMars(): number {
      const planet = new Mars(this.seconds);
      return +(planet as Planet).getPlanetAge();
   }

   onJupiter(): number {
      const planet = new Jupiter(this.seconds);
      return +(planet as Planet).getPlanetAge();
   }

   onSaturn(): number {
     const planet = new Saturn(this.seconds);
     return +(planet as Planet).getPlanetAge();
   }

   onUranus(): number {
     const planet = new Uranus(this.seconds);
     return +(planet as Planet).getPlanetAge();
   }

   onNeptune(): number {
      const planet = new Neptune(this.seconds);
      return +(planet as Planet).getPlanetAge();
   }
}

export default SpaceAge;

abstract class Planet {
   protected secondsInEarthYear: number = 31557600;
   protected planetYearWrtEarth: number = 0;
   protected seconds: number;

   constructor(seconds: number) {
     this.seconds = seconds;
   }

   public getPlanetAge(): string {
     let totalSeconds: string = <string><any>(this.seconds / this.getSecondsInPlanetsYearWrtEarth());
     return Number.parseFloat(totalSeconds).toFixed(2);
   }

   public getSecondsInPlanetsYearWrtEarth(): number {
     return this.secondsInEarthYear * this.planetYearWrtEarth;
   }
}

class Earth extends Planet {
  protected planetYearWrtEarth: number = 1;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Mercury extends Planet {
  protected planetYearWrtEarth: number = 0.2408467;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Venus extends Planet {
  protected planetYearWrtEarth: number = 0.61519726;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Mars extends Planet {
  protected planetYearWrtEarth: number = 1.8808158;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Jupiter extends Planet {
  protected planetYearWrtEarth: number = 11.862615;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Saturn extends Planet {
  protected planetYearWrtEarth: number = 29.447498;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Uranus extends Planet {
  protected planetYearWrtEarth: number = 84.016846;
  constructor(seconds: number) {
    super(seconds);
  }
}

class Neptune extends Planet {
  protected planetYearWrtEarth: number = 164.79132;
  constructor(seconds: number) {
    super(seconds);
  }
}

