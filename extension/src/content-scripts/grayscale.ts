export default function toggleGrayscale(): boolean {
    const style = "grayscale(100%)";

    const applied = document.body.style.filter === style;

    document.body.style.filter = applied ? "" : style;

    return applied;
}
