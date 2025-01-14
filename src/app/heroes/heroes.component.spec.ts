import { HeroesComponent } from "./heroes.component";
import { Hero } from "../hero";
import { of } from "rxjs";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let mockHeroService: any;
  let HEROES: Hero[];

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeores', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call delete hero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});