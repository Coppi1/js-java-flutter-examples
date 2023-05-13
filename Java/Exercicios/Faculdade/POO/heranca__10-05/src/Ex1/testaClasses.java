package Ex1;

public class testaClasses {
    public static void main(String[] args){
        animal ani = new animal();
        ani.makeNoise();
        ani.eat();
        ani.sleep();
        ani.roan();
        felino fel = new felino();
        fel.roan();
        ani_hipo hip = new ani_hipo();
        hip.makeNoise();
        hip.eat();
        canino can = new canino();
        can.roan();
        fel_leao leo = new fel_leao();
        leo.makeNoise();
        leo.eat();
        leo.sleep();
    }
}
