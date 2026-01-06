import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('design');

  const portfolioProjects = [
    {
      id: 1,
      title: 'Современная гостиная',
      category: 'Гостиная',
      image: 'https://cdn.poehali.dev/projects/b05526e5-5eec-44c7-bb13-f76b2a2ac58f/files/cfa27120-e6ee-4610-bc7c-c2329d4975b7.jpg',
      area: '45 м²',
      style: 'Минимализм'
    },
    {
      id: 2,
      title: 'Элегантная спальня',
      category: 'Спальня',
      image: 'https://cdn.poehali.dev/projects/b05526e5-5eec-44c7-bb13-f76b2a2ac58f/files/9128c3c7-5573-43a7-ad13-2a445301c91d.jpg',
      area: '30 м²',
      style: 'Современный'
    },
    {
      id: 3,
      title: 'Премиум кухня',
      category: 'Кухня',
      image: 'https://cdn.poehali.dev/projects/b05526e5-5eec-44c7-bb13-f76b2a2ac58f/files/7ae8405b-dc67-4e0b-b50e-9059dbd37bc7.jpg',
      area: '25 м²',
      style: 'Luxury'
    }
  ];

  const services = [
    {
      icon: 'Ruler',
      title: 'Планировка',
      description: 'Разработка функциональной планировки с учетом всех особенностей помещения'
    },
    {
      icon: 'Palette',
      title: '3D визуализация',
      description: 'Реалистичные 3D-визуализации для полного понимания будущего интерьера'
    },
    {
      icon: 'FileText',
      title: 'Документация',
      description: 'Полный комплект рабочей документации для строителей'
    },
    {
      icon: 'Users',
      title: 'Авторский надзор',
      description: 'Контроль выполнения работ на всех этапах ремонта'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: 'от 2 500 ₽/м²',
      features: [
        'Обмерочный чертеж',
        'Планировочное решение',
        'Расстановка мебели',
        'План электрики',
        'Базовая смета'
      ],
      color: 'from-primary to-primary/80'
    },
    {
      name: 'Стандарт',
      price: 'от 3 500 ₽/м²',
      features: [
        'Все из базового',
        '3D визуализация (3 ракурса)',
        'Развертки стен',
        'Подбор отделочных материалов',
        'Детальная смета'
      ],
      color: 'from-accent to-accent/80',
      popular: true
    },
    {
      name: 'Премиум',
      price: 'от 5 000 ₽/м²',
      features: [
        'Все из стандарта',
        'Неограниченные 3D визуализации',
        'Дизайн-проект мебели',
        'Авторский надзор',
        'Комплектация под ключ'
      ],
      color: 'from-secondary to-secondary/80'
    }
  ];

  const materials = [
    {
      category: 'Напольные покрытия',
      items: ['Паркет', 'Ламинат', 'Плитка', 'Керамогранит', 'Наливной пол']
    },
    {
      category: 'Настенные покрытия',
      items: ['Декоративная штукатурка', 'Обои', 'Краска', 'Панели', 'Кирпич']
    },
    {
      category: 'Потолки',
      items: ['Натяжные', 'Гипсокартон', 'Реечные', 'Кассетные', 'Покраска']
    },
    {
      category: 'Сантехника',
      items: ['Смесители', 'Ванны', 'Душевые кабины', 'Унитазы', 'Раковины']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              INTERIOR STUDIO
            </h1>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('design')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Дизайн
              </button>
              <button
                onClick={() => scrollToSection('renovation')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Ремонт
              </button>
              <button
                onClick={() => scrollToSection('materials')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Материалы
              </button>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              СОЗДАЁМ
            </span>
            <br />
            <span className="text-foreground">
              ПРОСТРАНСТВА
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              МЕЧТЫ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Профессиональный дизайн интерьера и комплексный ремонт под ключ
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              Заказать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="design" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ДИЗАЙН
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Наши лучшие проекты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {portfolioProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-sm text-primary font-bold mb-1">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{project.area}</span>
                        <span>•</span>
                        <span>{project.style}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 hover:border-primary transition-all duration-300 animate-slide-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name={service.icon} className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="renovation" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                РЕМОНТ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Тарифы и услуги</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-8 relative overflow-hidden ${plan.popular ? 'border-accent border-2 shadow-2xl scale-105' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.name}
                </div>
                <div className="text-4xl font-black mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-accent to-secondary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                МАТЕРИАЛЫ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Качественные материалы для вашего проекта</p>
          </div>

          <Tabs defaultValue="Напольные покрытия" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent">
              {materials.map((material) => (
                <TabsTrigger
                  key={material.category}
                  value={material.category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white font-bold py-3"
                >
                  {material.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {materials.map((material) => (
              <TabsContent key={material.category} value={material.category} className="mt-8">
                <div className="grid md:grid-cols-5 gap-4">
                  {material.items.map((item, index) => (
                    <Card
                      key={item}
                      className="p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon name="Package" size={32} className="text-primary" />
                      </div>
                      <h3 className="font-bold">{item}</h3>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4">
            INTERIOR STUDIO
          </h2>
          <p className="text-muted-foreground mb-6">Создаём интерьеры, которые вдохновляют</p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Phone" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Interior Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
